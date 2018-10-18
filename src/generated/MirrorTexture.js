import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class MirrorTexture extends React.Component {
  constructor (props) {
    super(props)
    const { scene, mirrorPlane, blurRatio, adaptiveBlurKernel, blurKernel, blurKernelX, blurKernelY, name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer } = props
    this.MirrorTexture = new BABYLON.MirrorTexture(name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer)
    this.MirrorTexture.scene = scene
    this.MirrorTexture.mirrorPlane = mirrorPlane
    this.MirrorTexture.blurRatio = blurRatio
    this.MirrorTexture.adaptiveBlurKernel = adaptiveBlurKernel
    this.MirrorTexture.blurKernel = blurKernel
    this.MirrorTexture.blurKernelX = blurKernelX
    this.MirrorTexture.blurKernelY = blurKernelY
  }

  render () {
    return null
  }
}

export default withScene(MirrorTexture)

