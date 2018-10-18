import React from 'react'

class GlowLayer extends React.Component {
  constructor (props) {
    super(props)
    const { blurKernelSize, intensity, customEmissiveColorSelector, customEmissiveTextureSelector } = props
    this.GlowLayer = new GlowLayer(blurKernelSize, intensity, customEmissiveColorSelector, customEmissiveTextureSelector)
  }

  render () {
    return null
  }
}

export default GlowLayer

