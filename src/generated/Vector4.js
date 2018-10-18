import React from 'react'

class Vector4 extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, w } = props
    this.Vector4 = new Vector4(x, y, z, w)
  }

  render () {
    return null
  }
}

export default Vector4

