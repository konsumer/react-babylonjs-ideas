import React from 'react'

class MultiRenderTarget extends React.Component {
  constructor (props) {
    super(props)
    const { isSupported, textures, depthTexture, wrapU, wrapV, samples } = props
    this.MultiRenderTarget = new MultiRenderTarget(isSupported, textures, depthTexture, wrapU, wrapV, samples)
  }

  render () {
    return null
  }
}

export default MultiRenderTarget

