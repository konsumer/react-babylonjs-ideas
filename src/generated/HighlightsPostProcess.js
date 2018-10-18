import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class HighlightsPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, options, camera, samplingMode, engine, reusable, textureType } = props
    this.HighlightsPostProcess = new BABYLON.HighlightsPostProcess(name, options, camera, samplingMode, engine, reusable, textureType)
    
  }

  render () {
    return null
  }
}

export default withEngine(HighlightsPostProcess)

