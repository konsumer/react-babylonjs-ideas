import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class BloomMergePostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { weight, name, originalFromInput, blurred, weight, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.BloomMergePostProcess = new BABYLON.BloomMergePostProcess(name, originalFromInput, blurred, weight, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    this.BloomMergePostProcess.weight = weight
  }

  render () {
    return null
  }
}

export default withEngine(BloomMergePostProcess)

