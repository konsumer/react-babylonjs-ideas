import React from 'react'
import BABYLON from 'babylonjs'

class Viewport extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, width, height, x, y, width, height } = props
    this.Viewport = new BABYLON.Viewport(x, y, width, height)
    this.Viewport.x = x
    this.Viewport.y = y
    this.Viewport.width = width
    this.Viewport.height = height
  }

  render () {
    return null
  }
}

export default Viewport

