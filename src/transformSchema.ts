import process from "node:process"
import { Project } from "ts-morph"

function transformSchema() {
  console.log(process.env.PWD)  
  const project = new Project({
    tsConfigFilePath: `${process.env.PWD ?? "."}/tsconfig.json`,
    skipAddingFilesFromTsConfig: true,
  })  

  const path = `${process.env.PWD ?? "."}/vultr-types/vultr-schema.d.ts`  

  project.addSourceFileAtPath(path)  

  const schemaAst = () => {
    try {
      return project.getSourceFileOrThrow(path)  
    } catch (e) {
      throw new Error(
        `Failed to get Vultr schema at ${path}/vultr-types/vultr-schema.d.ts: `,
        e ?? "",
      )  
    }
  }

  // schemaAst?.getInterfaces().map((e) => console.log(e))
  console.log(
    schemaAst()
      .getInterfaces()
      .map((v) => {
        console.log(v.getDeclareKeyword())  
      }),
  )  
}

export default transformSchema  
