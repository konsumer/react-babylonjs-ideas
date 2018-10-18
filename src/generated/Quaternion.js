import React from 'react'

class Quaternion extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, w } = props
    this.Quaternion = new Quaternion(x, y, z, w)
  }

  render () {
    return null
  }
}

export default Quaternion

