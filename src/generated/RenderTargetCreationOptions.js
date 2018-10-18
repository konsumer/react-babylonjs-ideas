import React from 'react'

class RenderTargetCreationOptions extends React.Component {
  constructor (props) {
    super(props)
    const { generateMipMaps, generateDepthBuffer, generateStencilBuffer, type, samplingMode, format } = props
    this.RenderTargetCreationOptions = new RenderTargetCreationOptions(generateMipMaps, generateDepthBuffer, generateStencilBuffer, type, samplingMode, format)
  }

  render () {
    return null
  }
}

export default RenderTargetCreationOptions

