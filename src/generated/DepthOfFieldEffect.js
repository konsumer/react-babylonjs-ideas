import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DepthOfFieldEffect extends React.Component {
  constructor (props) {
    super(props)
    const { focalLength, fStop, focusDistance, lensSize, depthTexture, scene, depthTexture, blurLevel, pipelineTextureType, blockCompilation } = props
    this.DepthOfFieldEffect = new BABYLON.DepthOfFieldEffect(scene, depthTexture, blurLevel, pipelineTextureType, blockCompilation)
    this.DepthOfFieldEffect.focalLength = focalLength
    this.DepthOfFieldEffect.fStop = fStop
    this.DepthOfFieldEffect.focusDistance = focusDistance
    this.DepthOfFieldEffect.lensSize = lensSize
    this.DepthOfFieldEffect.depthTexture = depthTexture
  }

  render () {
    return null
  }
}

export default withScene(DepthOfFieldEffect)

