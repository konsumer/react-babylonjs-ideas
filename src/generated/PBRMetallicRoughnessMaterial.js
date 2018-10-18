import React from 'react'

class PBRMetallicRoughnessMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { baseColor, baseTexture, metallic, roughness, metallicRoughnessTexture } = props
    this.PBRMetallicRoughnessMaterial = new PBRMetallicRoughnessMaterial(baseColor, baseTexture, metallic, roughness, metallicRoughnessTexture)
  }

  render () {
    return null
  }
}

export default PBRMetallicRoughnessMaterial

