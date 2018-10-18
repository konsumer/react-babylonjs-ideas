import React from 'react'
import { withEngine } from './Engine'

class EngineInstrumentation extends React.Component {
  constructor (props) {
    super(props)
    const { engine, gpuFrameTimeCounter, captureGPUFrameTime, shaderCompilationTimeCounter, captureShaderCompilationTime } = props
    this.EngineInstrumentation = new EngineInstrumentation(engine, gpuFrameTimeCounter, captureGPUFrameTime, shaderCompilationTimeCounter, captureShaderCompilationTime)
  }

  render () {
    return null
  }
}

export default withEngine(EngineInstrumentation)

