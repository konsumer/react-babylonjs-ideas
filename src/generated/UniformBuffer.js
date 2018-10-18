import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class UniformBuffer extends React.Component {
  constructor (props) {
    super(props)
    const { updateMatrix3x3, updateMatrix2x2, updateFloat, updateFloat2, updateFloat3, updateFloat4, updateMatrix, updateVector3, updateVector4, updateColor3, updateColor4, useUbo, isSync, engine, data, dynamic } = props
    this.UniformBuffer = new BABYLON.UniformBuffer(engine, data, dynamic)
    this.UniformBuffer.updateMatrix3x3 = updateMatrix3x3
    this.UniformBuffer.updateMatrix2x2 = updateMatrix2x2
    this.UniformBuffer.updateFloat = updateFloat
    this.UniformBuffer.updateFloat2 = updateFloat2
    this.UniformBuffer.updateFloat3 = updateFloat3
    this.UniformBuffer.updateFloat4 = updateFloat4
    this.UniformBuffer.updateMatrix = updateMatrix
    this.UniformBuffer.updateVector3 = updateVector3
    this.UniformBuffer.updateVector4 = updateVector4
    this.UniformBuffer.updateColor3 = updateColor3
    this.UniformBuffer.updateColor4 = updateColor4
    this.UniformBuffer.useUbo = useUbo
    this.UniformBuffer.isSync = isSync
  }

  render () {
    return null
  }
}

export default withEngine(UniformBuffer)

