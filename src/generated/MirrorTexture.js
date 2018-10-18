import React from 'react'
import { withScene } from './Scene'

class MirrorTexture extends React.Component {
  constructor (props) {
    super(props)
    const { scene, mirrorPlane, blurRatio, adaptiveBlurKernel, blurKernel, blurKernelX, blurKernelY } = props
    this.MirrorTexture = new MirrorTexture(scene, mirrorPlane, blurRatio, adaptiveBlurKernel, blurKernel, blurKernelX, blurKernelY)
  }

  render () {
    return null
  }
}

export default withScene(MirrorTexture)

