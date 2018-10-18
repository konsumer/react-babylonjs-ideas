import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class PassPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation } = props
    this.PassPostProcess = new BABYLON.PassPostProcess(name, options, camera, samplingMode, engine, reusable, textureType, blockCompilation)
    
  }

  render () {
    return null
  }
}

export default withEngine(PassPostProcess)

