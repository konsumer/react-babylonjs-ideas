import React from 'react'
import BABYLON from 'babylonjs'

class BoundingBox extends React.Component {
  constructor (props) {
    super(props)
    const { vectors, center, centerWorld, extendSize, extendSizeWorld, directions, vectorsWorld, minimumWorld, maximumWorld, minimum, maximum, min, max } = props
    this.BoundingBox = new BABYLON.BoundingBox(min, max)
    this.BoundingBox.vectors = vectors
    this.BoundingBox.center = center
    this.BoundingBox.centerWorld = centerWorld
    this.BoundingBox.extendSize = extendSize
    this.BoundingBox.extendSizeWorld = extendSizeWorld
    this.BoundingBox.directions = directions
    this.BoundingBox.vectorsWorld = vectorsWorld
    this.BoundingBox.minimumWorld = minimumWorld
    this.BoundingBox.maximumWorld = maximumWorld
    this.BoundingBox.minimum = minimum
    this.BoundingBox.maximum = maximum
  }

  render () {
    return null
  }
}

export default BoundingBox

