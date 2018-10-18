import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class TonemapPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { exposureAdjustment, name, _operator, exposureAdjustment, camera, samplingMode, engine, textureFormat } = props
    this.TonemapPostProcess = new BABYLON.TonemapPostProcess(name, _operator, exposureAdjustment, camera, samplingMode, engine, textureFormat)
    this.TonemapPostProcess.exposureAdjustment = exposureAdjustment
  }

  render () {
    return null
  }
}

export default withEngine(TonemapPostProcess)

