import React from 'react'
import BABYLON from 'babylonjs'

class RenderTargetCreationOptions extends React.Component {
  constructor (props) {
    super(props)
    const { generateMipMaps, generateDepthBuffer, generateStencilBuffer, type, samplingMode, format } = props
    this.RenderTargetCreationOptions = new BABYLON.RenderTargetCreationOptions()
    this.RenderTargetCreationOptions.generateMipMaps = generateMipMaps
    this.RenderTargetCreationOptions.generateDepthBuffer = generateDepthBuffer
    this.RenderTargetCreationOptions.generateStencilBuffer = generateStencilBuffer
    this.RenderTargetCreationOptions.type = type
    this.RenderTargetCreationOptions.samplingMode = samplingMode
    this.RenderTargetCreationOptions.format = format
  }

  render () {
    return null
  }
}

export default RenderTargetCreationOptions

