import React from 'react'
import BABYLON from 'babylonjs'

class Vector2 extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, x, y } = props
    this.Vector2 = new BABYLON.Vector2(x, y)
    this.Vector2.x = x
    this.Vector2.y = y
  }

  render () {
    return null
  }
}

export default Vector2

