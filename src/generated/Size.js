import React from 'react'
import BABYLON from 'babylonjs'

class Size extends React.Component {
  constructor (props) {
    super(props)
    const { width, height, surface, width, height } = props
    this.Size = new BABYLON.Size(width, height)
    this.Size.width = width
    this.Size.height = height
    this.Size.surface = surface
  }

  render () {
    return null
  }
}

export default Size

