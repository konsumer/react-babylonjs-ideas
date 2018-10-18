import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class MultiRenderTarget extends React.Component {
  constructor (props) {
    super(props)
    const { isSupported, textures, depthTexture, wrapU, wrapV, samples, name, size, count, scene, options } = props
    this.MultiRenderTarget = new BABYLON.MultiRenderTarget(name, size, count, scene, options)
    this.MultiRenderTarget.isSupported = isSupported
    this.MultiRenderTarget.textures = textures
    this.MultiRenderTarget.depthTexture = depthTexture
    this.MultiRenderTarget.wrapU = wrapU
    this.MultiRenderTarget.wrapV = wrapV
    this.MultiRenderTarget.samples = samples
  }

  render () {
    return null
  }
}

export default withScene(MultiRenderTarget)

