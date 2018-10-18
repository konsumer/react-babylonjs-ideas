import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class ColorCorrectionPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, colorTableUrl, options, camera, samplingMode, engine, reusable } = props
    this.ColorCorrectionPostProcess = new BABYLON.ColorCorrectionPostProcess(name, colorTableUrl, options, camera, samplingMode, engine, reusable)
    
  }

  render () {
    return null
  }
}

export default withEngine(ColorCorrectionPostProcess)

