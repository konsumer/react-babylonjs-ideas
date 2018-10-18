import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PBRSpecularGlossinessMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { diffuseColor, diffuseTexture, specularColor, glossiness, specularGlossinessTexture, name, scene } = props
    this.PBRSpecularGlossinessMaterial = new BABYLON.PBRSpecularGlossinessMaterial(name, scene)
    this.PBRSpecularGlossinessMaterial.diffuseColor = diffuseColor
    this.PBRSpecularGlossinessMaterial.diffuseTexture = diffuseTexture
    this.PBRSpecularGlossinessMaterial.specularColor = specularColor
    this.PBRSpecularGlossinessMaterial.glossiness = glossiness
    this.PBRSpecularGlossinessMaterial.specularGlossinessTexture = specularGlossinessTexture
  }

  render () {
    return null
  }
}

export default withScene(PBRSpecularGlossinessMaterial)

