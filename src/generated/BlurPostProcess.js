import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class BlurPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { direction, blockCompilation, kernel, packedFloat, name, direction, kernel, options, camera, samplingMode, engine, reusable, textureType, defines, blockCompilation } = props
    this.BlurPostProcess = new BABYLON.BlurPostProcess(name, direction, kernel, options, camera, samplingMode, engine, reusable, textureType, defines, blockCompilation)
    this.BlurPostProcess.direction = direction
    this.BlurPostProcess.blockCompilation = blockCompilation
    this.BlurPostProcess.kernel = kernel
    this.BlurPostProcess.packedFloat = packedFloat
  }

  render () {
    return null
  }
}

export default withEngine(BlurPostProcess)

