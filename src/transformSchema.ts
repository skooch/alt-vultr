import process from "node:process"
import { Project, SyntaxKind } from "ts-morph"
import transformParametersProp from "./transforms/parameters.js"
import transformRequestBodyProp from "./transforms/requestBody.js"
import transformResponsesProp from "./transforms/responses.js"

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

  const openApiOperations = schemaAst()
    .getInterfaces().find(v => v.getName() === 'operations')
  
  if (!openApiOperations) throw new Error('Could not locate OpenAPI operations')

  const ops = openApiOperations.getProperties().map(v => {
    const propertyName = v.getFirstChildByKind(SyntaxKind.StringLiteral)?.getLiteralText() ?? 'undefined'

    return {
      [propertyName]: v.getFirstChildByKind(SyntaxKind.TypeLiteral)?.getFirstChildByKind(SyntaxKind.SyntaxList)?.getChildren().map(p => {
        const propName = p.getFirstChild()?.getText() ?? 'undefined'

        const transformPropValue = (prop: any) => {
          switch (propName) {
            case 'parameters':
              return transformParametersProp(prop)
            case 'requestBody':
              return transformRequestBodyProp(prop)
            case 'responses':
              return transformResponsesProp(prop)
            default:
              console.warn('Unsupported operation property: ', prop)
              return undefined
          }
        }

        return {
          [propName]: transformPropValue(p)
        }
      })
    }
  })

  console.log(ops[0]['get-account'])
}

export default transformSchema  
