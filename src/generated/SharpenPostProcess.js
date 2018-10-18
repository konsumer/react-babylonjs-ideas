import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class SharpenPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { colorAmount, edgeAmount, name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.SharpenPostProcess = new BABYLON.SharpenPostProcess(name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    this.SharpenPostProcess.colorAmount = colorAmount
    this.SharpenPostProcess.edgeAmount = edgeAmount
  }

  render () {
    return null
  }
}

export default withEngine(SharpenPostProcess)

