import React from 'react'

class UniformBuffer extends React.Component {
  constructor (props) {
    super(props)
    const { updateMatrix3x3, updateMatrix2x2, updateFloat, updateFloat2, updateFloat3, updateFloat4, updateMatrix, updateVector3, updateVector4, updateColor3, updateColor4, useUbo, isSync } = props
    this.UniformBuffer = new UniformBuffer(updateMatrix3x3, updateMatrix2x2, updateFloat, updateFloat2, updateFloat3, updateFloat4, updateMatrix, updateVector3, updateVector4, updateColor3, updateColor4, useUbo, isSync)
  }

  render () {
    return null
  }
}

export default UniformBuffer

