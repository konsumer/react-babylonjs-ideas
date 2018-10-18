import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class AnaglyphPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, options, rigCameras, samplingMode, engine, reusable } = props
    this.AnaglyphPostProcess = new BABYLON.AnaglyphPostProcess(name, options, rigCameras, samplingMode, engine, reusable)
    
  }

  render () {
    return null
  }
}

export default withEngine(AnaglyphPostProcess)

