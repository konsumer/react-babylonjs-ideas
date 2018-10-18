import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class ChromaticAberrationPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { aberrationAmount, radialIntensity, direction, centerPosition, name, screenWidth, screenHeight, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.ChromaticAberrationPostProcess = new BABYLON.ChromaticAberrationPostProcess(name, screenWidth, screenHeight, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    this.ChromaticAberrationPostProcess.aberrationAmount = aberrationAmount
    this.ChromaticAberrationPostProcess.radialIntensity = radialIntensity
    this.ChromaticAberrationPostProcess.direction = direction
    this.ChromaticAberrationPostProcess.centerPosition = centerPosition
  }

  render () {
    return null
  }
}

export default withEngine(ChromaticAberrationPostProcess)

