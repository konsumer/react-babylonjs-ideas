import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class DepthOfFieldMergePostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { blurSteps, name, originalFromInput, circleOfConfusion, blurSteps, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.DepthOfFieldMergePostProcess = new BABYLON.DepthOfFieldMergePostProcess(name, originalFromInput, circleOfConfusion, blurSteps, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    this.DepthOfFieldMergePostProcess.blurSteps = blurSteps
  }

  render () {
    return null
  }
}

export default withEngine(DepthOfFieldMergePostProcess)

