import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PBRBaseMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { LIGHTFALLOFF_PHYSICAL, LIGHTFALLOFF_GLTF, LIGHTFALLOFF_STANDARD, hasRenderTargetTextures, useLogarithmicDepth, transparencyMode, name, scene } = props
    this.PBRBaseMaterial = new BABYLON.PBRBaseMaterial(name, scene)
    this.PBRBaseMaterial.LIGHTFALLOFF_PHYSICAL = LIGHTFALLOFF_PHYSICAL
    this.PBRBaseMaterial.LIGHTFALLOFF_GLTF = LIGHTFALLOFF_GLTF
    this.PBRBaseMaterial.LIGHTFALLOFF_STANDARD = LIGHTFALLOFF_STANDARD
    this.PBRBaseMaterial.hasRenderTargetTextures = hasRenderTargetTextures
    this.PBRBaseMaterial.useLogarithmicDepth = useLogarithmicDepth
    this.PBRBaseMaterial.transparencyMode = transparencyMode
  }

  render () {
    return null
  }
}

export default withScene(PBRBaseMaterial)

