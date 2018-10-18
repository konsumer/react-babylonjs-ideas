import React from 'react'

class PBRBaseMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { hasRenderTargetTextures, useLogarithmicDepth, transparencyMode } = props
    this.PBRBaseMaterial = new PBRBaseMaterial(hasRenderTargetTextures, useLogarithmicDepth, transparencyMode)
  }

  render () {
    return null
  }
}

export default PBRBaseMaterial

