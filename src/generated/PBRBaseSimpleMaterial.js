import React from 'react'

class PBRBaseSimpleMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { maxSimultaneousLights, disableLighting, environmentTexture, invertNormalMapX, invertNormalMapY, normalTexture, emissiveColor, emissiveTexture, occlusionStrength, occlusionTexture, alphaCutOff, doubleSided, lightmapTexture, useLightmapAsShadowmap } = props
    this.PBRBaseSimpleMaterial = new PBRBaseSimpleMaterial(maxSimultaneousLights, disableLighting, environmentTexture, invertNormalMapX, invertNormalMapY, normalTexture, emissiveColor, emissiveTexture, occlusionStrength, occlusionTexture, alphaCutOff, doubleSided, lightmapTexture, useLightmapAsShadowmap)
  }

  render () {
    return null
  }
}

export default PBRBaseSimpleMaterial

