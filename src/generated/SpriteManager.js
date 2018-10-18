import React from 'react'

class SpriteManager extends React.Component {
  constructor (props) {
    super(props)
    const { name, sprites, renderingGroupId, layerMask, fogEnabled, isPickable, cellWidth, cellHeight, onDisposeObservable, onDispose, texture } = props
    this.SpriteManager = new SpriteManager(name, sprites, renderingGroupId, layerMask, fogEnabled, isPickable, cellWidth, cellHeight, onDisposeObservable, onDispose, texture)
  }

  render () {
    return null
  }
}

export default SpriteManager

