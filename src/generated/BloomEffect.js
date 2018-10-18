import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class BloomEffect extends React.Component {
  constructor (props) {
    super(props)
    const { bloomScale, threshold, weight, kernel, scene, bloomScale, bloomWeight, bloomKernel, pipelineTextureType, blockCompilation } = props
    this.BloomEffect = new BABYLON.BloomEffect(scene, bloomScale, bloomWeight, bloomKernel, pipelineTextureType, blockCompilation)
    this.BloomEffect.bloomScale = bloomScale
    this.BloomEffect.threshold = threshold
    this.BloomEffect.weight = weight
    this.BloomEffect.kernel = kernel
  }

  render () {
    return null
  }
}

export default withScene(BloomEffect)

