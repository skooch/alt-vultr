import process from "node:process";
import { Project } from "ts-morph";

function transformSchema() {
  console.log(process.env.PWD);
  const project = new Project({
    tsConfigFilePath: `${process.env.PWD ?? "."}/tsconfig.json`,
    skipAddingFilesFromTsConfig: true,
  });

  const schemaAst = () => {
    try {
      return project.getSourceFileOrThrow(
        `${process.env.PWD ?? "."}/vultr-types/vultr-schema.d.ts`,
      );
    } catch (e) {
      throw new Error(
        `Failed to get Vultr schema at ${process.env.PWD ?? "."}/vultr-types/vultr-schema.d.ts: `,
        e ?? "",
      );
    }
  };

  // schemaAst?.getInterfaces().map((e) => console.log(e))
  console.log(schemaAst().getInterfaces());
}

export default transformSchema;
