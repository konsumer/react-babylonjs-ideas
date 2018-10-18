import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class EngineInstrumentation extends React.Component {
  constructor (props) {
    super(props)
    const { engine, gpuFrameTimeCounter, captureGPUFrameTime, shaderCompilationTimeCounter, captureShaderCompilationTime, engine } = props
    this.EngineInstrumentation = new BABYLON.EngineInstrumentation(engine)
    this.EngineInstrumentation.engine = engine
    this.EngineInstrumentation.gpuFrameTimeCounter = gpuFrameTimeCounter
    this.EngineInstrumentation.captureGPUFrameTime = captureGPUFrameTime
    this.EngineInstrumentation.shaderCompilationTimeCounter = shaderCompilationTimeCounter
    this.EngineInstrumentation.captureShaderCompilationTime = captureShaderCompilationTime
  }

  render () {
    return null
  }
}

export default withEngine(EngineInstrumentation)

