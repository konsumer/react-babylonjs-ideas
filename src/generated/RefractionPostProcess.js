import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class RefractionPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { color, depth, colorLevel, refractionTexture, name, refractionTextureUrl, color, depth, colorLevel, options, camera, samplingMode, engine, reusable } = props
    this.RefractionPostProcess = new BABYLON.RefractionPostProcess(name, refractionTextureUrl, color, depth, colorLevel, options, camera, samplingMode, engine, reusable)
    this.RefractionPostProcess.color = color
    this.RefractionPostProcess.depth = depth
    this.RefractionPostProcess.colorLevel = colorLevel
    this.RefractionPostProcess.refractionTexture = refractionTexture
  }

  render () {
    return null
  }
}

export default withEngine(RefractionPostProcess)

