import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class ExtractHighlightsPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { threshold, name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.ExtractHighlightsPostProcess = new BABYLON.ExtractHighlightsPostProcess(name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    this.ExtractHighlightsPostProcess.threshold = threshold
  }

  render () {
    return null
  }
}

export default withEngine(ExtractHighlightsPostProcess)

