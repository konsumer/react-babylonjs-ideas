import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class BlackAndWhitePostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { degree, name, options, camera, samplingMode, engine, reusable } = props
    this.BlackAndWhitePostProcess = new BABYLON.BlackAndWhitePostProcess(name, options, camera, samplingMode, engine, reusable)
    this.BlackAndWhitePostProcess.degree = degree
  }

  render () {
    return null
  }
}

export default withEngine(BlackAndWhitePostProcess)

