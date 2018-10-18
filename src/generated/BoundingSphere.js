import React from 'react'
import BABYLON from 'babylonjs'

class BoundingSphere extends React.Component {
  constructor (props) {
    super(props)
    const { center, radius, centerWorld, radiusWorld, minimum, maximum, min, max } = props
    this.BoundingSphere = new BABYLON.BoundingSphere(min, max)
    this.BoundingSphere.center = center
    this.BoundingSphere.radius = radius
    this.BoundingSphere.centerWorld = centerWorld
    this.BoundingSphere.radiusWorld = radiusWorld
    this.BoundingSphere.minimum = minimum
    this.BoundingSphere.maximum = maximum
  }

  render () {
    return null
  }
}

export default BoundingSphere

