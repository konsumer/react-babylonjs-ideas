import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PBRBaseSimpleMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { maxSimultaneousLights, disableLighting, environmentTexture, invertNormalMapX, invertNormalMapY, normalTexture, emissiveColor, emissiveTexture, occlusionStrength, occlusionTexture, alphaCutOff, doubleSided, lightmapTexture, useLightmapAsShadowmap, name, scene } = props
    this.PBRBaseSimpleMaterial = new BABYLON.PBRBaseSimpleMaterial(name, scene)
    this.PBRBaseSimpleMaterial.maxSimultaneousLights = maxSimultaneousLights
    this.PBRBaseSimpleMaterial.disableLighting = disableLighting
    this.PBRBaseSimpleMaterial.environmentTexture = environmentTexture
    this.PBRBaseSimpleMaterial.invertNormalMapX = invertNormalMapX
    this.PBRBaseSimpleMaterial.invertNormalMapY = invertNormalMapY
    this.PBRBaseSimpleMaterial.normalTexture = normalTexture
    this.PBRBaseSimpleMaterial.emissiveColor = emissiveColor
    this.PBRBaseSimpleMaterial.emissiveTexture = emissiveTexture
    this.PBRBaseSimpleMaterial.occlusionStrength = occlusionStrength
    this.PBRBaseSimpleMaterial.occlusionTexture = occlusionTexture
    this.PBRBaseSimpleMaterial.alphaCutOff = alphaCutOff
    this.PBRBaseSimpleMaterial.doubleSided = doubleSided
    this.PBRBaseSimpleMaterial.lightmapTexture = lightmapTexture
    this.PBRBaseSimpleMaterial.useLightmapAsShadowmap = useLightmapAsShadowmap
  }

  render () {
    return null
  }
}

export default withScene(PBRBaseSimpleMaterial)

