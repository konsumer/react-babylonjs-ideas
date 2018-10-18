import React from 'react'
import BABYLON from 'babylonjs'

class PositionNormalVertex extends React.Component {
  constructor (props) {
    super(props)
    const { position, normal, position, normal } = props
    this.PositionNormalVertex = new BABYLON.PositionNormalVertex(position, normal)
    this.PositionNormalVertex.position = position
    this.PositionNormalVertex.normal = normal
  }

  render () {
    return null
  }
}

export default PositionNormalVertex

