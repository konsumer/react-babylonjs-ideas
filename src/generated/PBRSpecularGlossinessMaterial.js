import React from 'react'

class PBRSpecularGlossinessMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { diffuseColor, diffuseTexture, specularColor, glossiness, specularGlossinessTexture } = props
    this.PBRSpecularGlossinessMaterial = new PBRSpecularGlossinessMaterial(diffuseColor, diffuseTexture, specularColor, glossiness, specularGlossinessTexture)
  }

  render () {
    return null
  }
}

export default PBRSpecularGlossinessMaterial

