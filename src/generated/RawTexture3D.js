import React from 'react'

class RawTexture3D extends React.Component {
  constructor (props) {
    super(props)
    const { format } = props
    this.RawTexture3D = new RawTexture3D(format)
  }

  render () {
    return null
  }
}

export default RawTexture3D

