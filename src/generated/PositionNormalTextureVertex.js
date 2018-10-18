import React from 'react'
import BABYLON from 'babylonjs'

class PositionNormalTextureVertex extends React.Component {
  constructor (props) {
    super(props)
    const { position, normal, uv, position, normal, uv } = props
    this.PositionNormalTextureVertex = new BABYLON.PositionNormalTextureVertex(position, normal, uv)
    this.PositionNormalTextureVertex.position = position
    this.PositionNormalTextureVertex.normal = normal
    this.PositionNormalTextureVertex.uv = uv
  }

  render () {
    return null
  }
}

export default PositionNormalTextureVertex

