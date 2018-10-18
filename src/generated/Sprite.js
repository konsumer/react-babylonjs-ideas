import React from 'react'
import BABYLON from 'babylonjs'

class Sprite extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, color, width, height, angle, cellIndex, invertU, invertV, disposeWhenFinishedAnimating, animations, isPickable, actionManager, isVisible, size, name, manager } = props
    this.Sprite = new BABYLON.Sprite(name, manager)
    this.Sprite.name = name
    this.Sprite.position = position
    this.Sprite.color = color
    this.Sprite.width = width
    this.Sprite.height = height
    this.Sprite.angle = angle
    this.Sprite.cellIndex = cellIndex
    this.Sprite.invertU = invertU
    this.Sprite.invertV = invertV
    this.Sprite.disposeWhenFinishedAnimating = disposeWhenFinishedAnimating
    this.Sprite.animations = animations
    this.Sprite.isPickable = isPickable
    this.Sprite.actionManager = actionManager
    this.Sprite.isVisible = isVisible
    this.Sprite.size = size
  }

  render () {
    return null
  }
}

export default Sprite

