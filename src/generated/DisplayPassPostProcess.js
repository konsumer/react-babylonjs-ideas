import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class DisplayPassPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, options, camera, samplingMode, engine, reusable } = props
    this.DisplayPassPostProcess = new BABYLON.DisplayPassPostProcess(name, options, camera, samplingMode, engine, reusable)
    
  }

  render () {
    return null
  }
}

export default withEngine(DisplayPassPostProcess)

