import React from 'react'

class Vector3 extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, isNonUniform } = props
    this.Vector3 = new Vector3(x, y, z, isNonUniform)
  }

  render () {
    return null
  }
}

export default Vector3

