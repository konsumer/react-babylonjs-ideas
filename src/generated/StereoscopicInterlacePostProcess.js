import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class StereoscopicInterlacePostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, rigCameras, isStereoscopicHoriz, samplingMode, engine, reusable } = props
    this.StereoscopicInterlacePostProcess = new BABYLON.StereoscopicInterlacePostProcess(name, rigCameras, isStereoscopicHoriz, samplingMode, engine, reusable)
    
  }

  render () {
    return null
  }
}

export default withEngine(StereoscopicInterlacePostProcess)

