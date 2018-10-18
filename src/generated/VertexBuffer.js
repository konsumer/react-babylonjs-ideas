import React from 'react'

class VertexBuffer extends React.Component {
  constructor (props) {
    super(props)
    const { instanceDivisor, byteStride, byteOffset, normalized, type } = props
    this.VertexBuffer = new VertexBuffer(instanceDivisor, byteStride, byteOffset, normalized, type)
  }

  render () {
    return null
  }
}

export default VertexBuffer

