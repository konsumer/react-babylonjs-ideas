import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class FxaaPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { texelWidth, texelHeight, name, options, camera, samplingMode, engine, reusable, textureType } = props
    this.FxaaPostProcess = new BABYLON.FxaaPostProcess(name, options, camera, samplingMode, engine, reusable, textureType)
    this.FxaaPostProcess.texelWidth = texelWidth
    this.FxaaPostProcess.texelHeight = texelHeight
  }

  render () {
    return null
  }
}

export default withEngine(FxaaPostProcess)

