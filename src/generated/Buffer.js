import React from 'react'

class Buffer extends React.Component {
  constructor (props) {
    super(props)
    const { byteStride } = props
    this.Buffer = new Buffer(byteStride)
  }

  render () {
    return null
  }
}

export default Buffer

