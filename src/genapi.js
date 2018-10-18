const { Project, SyntaxKind } = require('ts-simple-ast')
const { green, yellow, white } = require('chalk')
const { writeFileSync } = require('fs')

const project = new Project({})

project.addExistingSourceFiles(`${__dirname}/../node_modules/babylonjs/**/*.ts`)
const sourceFile = project.getSourceFileOrThrow('babylon.d.ts')

const template = (name, params) => {
  const imports = [['React', 'react']]
  const hasScene = params.indexOf('scene') !== -1
  const hasEngine = params.indexOf('engine') !== -1
  const hasCanvas = params.indexOf('canvas') !== -1
  let ex = `export default ${name}\n`
  if (hasScene) {
    imports.push(['{ withScene }', './Scene'])
    ex = `export default withScene(${name})\n`
  }
  if (hasEngine) {
    if (hasCanvas) {
      imports.push(['{ withEngine, withCanvas }', './Engine'])
      ex = `export default withEngine(withCanvas(${name}))\n`
    } else {
      imports.push(['{ withEngine }', './Engine'])
      ex = `export default withEngine(${name})\n`
    }
  }
  const inlineParams = params.join(', ')
  return `${imports.map(i => `import ${i[0]} from '${i[1]}'`).join('\n')}

class ${name} extends React.Component {
  constructor (props) {
    super(props)
    const { ${inlineParams} } = props
    this.${name} = new ${name}(${inlineParams})
  }

  render () {
    return null
  }
}

${ex}
`
}

sourceFile.forEachDescendant((node, traversal) => {
  if (node.getKind() === SyntaxKind.ClassDeclaration) {
    const name = node.getName()
    if (name[0] === '_') {
      return
    }
    const params = node.getInstanceProperties().map(p => p.getName()).filter(p => p[0] !== '_')
    console.log(`${green(name)} ( ${yellow(params.join(white(', ')))} )`)
    writeFileSync(`${__dirname}/generated/${name}.js`, template(name, params))
  }
})
