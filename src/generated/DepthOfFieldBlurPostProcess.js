import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'
import { withEngine } from './Engine'

class DepthOfFieldBlurPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { direction, name, scene, direction, kernel, options, camera, circleOfConfusion, imageToBlur, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.DepthOfFieldBlurPostProcess = new BABYLON.DepthOfFieldBlurPostProcess(name, scene, direction, kernel, options, camera, circleOfConfusion, imageToBlur, samplingMode, engine, reusable, textureType, blockCompilation)
    this.DepthOfFieldBlurPostProcess.direction = direction
  }

  render () {
    return null
  }
}

export default withEngine(DepthOfFieldBlurPostProcess)

