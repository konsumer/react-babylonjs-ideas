import React from 'react'
import BABYLON from 'babylonjs'

class Path2 extends React.Component {
  constructor (props) {
    super(props)
    const { closed, x, y } = props
    this.Path2 = new BABYLON.Path2(x, y)
    this.Path2.closed = closed
  }

  render () {
    return null
  }
}

export default Path2

