import React from 'react'
import BABYLON from 'babylonjs'

class LensFlare extends React.Component {
  constructor (props) {
    super(props)
    const { size, position, color, texture, alphaMode, size, position, color, imgUrl, system } = props
    this.LensFlare = new BABYLON.LensFlare(size, position, color, imgUrl, system)
    this.LensFlare.size = size
    this.LensFlare.position = position
    this.LensFlare.color = color
    this.LensFlare.texture = texture
    this.LensFlare.alphaMode = alphaMode
  }

  render () {
    return null
  }
}

export default LensFlare

