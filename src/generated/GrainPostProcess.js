import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class GrainPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { intensity, animated, name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.GrainPostProcess = new BABYLON.GrainPostProcess(name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    this.GrainPostProcess.intensity = intensity
    this.GrainPostProcess.animated = animated
  }

  render () {
    return null
  }
}

export default withEngine(GrainPostProcess)

