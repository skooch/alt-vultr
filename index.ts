import { createConfig } from "@redocly/openapi-core";
import { mkdirSync, readdirSync, rmSync, rmdirSync, writeFileSync } from "fs";
import got from "got";
import openapiTS, { astToString } from "openapi-typescript";
import transformSchema from "./src/transformSchema.js";

const outDir = "./vultr-types";

const redocly = await createConfig({
  extends: ["recommended"],
  rules: {
    conformanceRegExp: "warn",
    spec: "warn",
    "path-not-include-query": "warn",
    "path-parameters-defined": "warn",
    "operation-operationId-unique": "warn",
    "spec-components-invalid-map-name": "warn",
  },
});

try {
  readdirSync(outDir).map((v) => {
    rmSync(outDir + `/${v}`);
  });
  rmdirSync(outDir);
} catch {}
try {
  mkdirSync(outDir);
} catch {}

const vultrApiResponse = await got.get("https://vultr.com/api/").text();

const getRedocObjectRegExp = new RegExp("const __redoc_state = ({.*})");

const target = getRedocObjectRegExp.exec(vultrApiResponse);

if (!target)
  throw new Error("Could not extract API definitions from Vultr API webpage");

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const parsed = JSON.parse(target[1]);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
if (!parsed.spec.data)
  throw new Error("Could not parse OpenAPI field from extracted JSON");

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const openAPISchema = parsed.spec.data;

let ast;

try {
  ast = await openapiTS(openAPISchema, {
    redocly,
    silent: true,
    alphabetize: true,
    enum: true,
    enumValues: true,
  });
} catch (e) {
  writeFileSync(
    outDir + "/openapi.json",
    JSON.stringify(openAPISchema, null, 2),
  );
  console.error("Error converting OpenAPI definitions to types");
  throw new Error(e);
}

const contents = astToString(ast);

writeFileSync(outDir + "/vultr-schema.d.ts", contents);

console.info("Successfully generated Vultr API types");

transformSchema();
