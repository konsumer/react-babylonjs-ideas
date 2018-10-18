import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class FilterPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { kernelMatrix, name, kernelMatrix, options, camera, samplingMode, engine, reusable } = props
    this.FilterPostProcess = new BABYLON.FilterPostProcess(name, kernelMatrix, options, camera, samplingMode, engine, reusable)
    this.FilterPostProcess.kernelMatrix = kernelMatrix
  }

  render () {
    return null
  }
}

export default withEngine(FilterPostProcess)

