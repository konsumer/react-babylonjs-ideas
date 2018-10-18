import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class CircleOfConfusionPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { lensSize, fStop, focusDistance, focalLength, depthTexture, name, depthTexture, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.CircleOfConfusionPostProcess = new BABYLON.CircleOfConfusionPostProcess(name, depthTexture, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    this.CircleOfConfusionPostProcess.lensSize = lensSize
    this.CircleOfConfusionPostProcess.fStop = fStop
    this.CircleOfConfusionPostProcess.focusDistance = focusDistance
    this.CircleOfConfusionPostProcess.focalLength = focalLength
    this.CircleOfConfusionPostProcess.depthTexture = depthTexture
  }

  render () {
    return null
  }
}

export default withEngine(CircleOfConfusionPostProcess)

