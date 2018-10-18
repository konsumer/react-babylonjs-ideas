import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PBRMetallicRoughnessMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { baseColor, baseTexture, metallic, roughness, metallicRoughnessTexture, name, scene } = props
    this.PBRMetallicRoughnessMaterial = new BABYLON.PBRMetallicRoughnessMaterial(name, scene)
    this.PBRMetallicRoughnessMaterial.baseColor = baseColor
    this.PBRMetallicRoughnessMaterial.baseTexture = baseTexture
    this.PBRMetallicRoughnessMaterial.metallic = metallic
    this.PBRMetallicRoughnessMaterial.roughness = roughness
    this.PBRMetallicRoughnessMaterial.metallicRoughnessTexture = metallicRoughnessTexture
  }

  render () {
    return null
  }
}

export default withScene(PBRMetallicRoughnessMaterial)

