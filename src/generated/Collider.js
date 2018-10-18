import React from 'react'
import BABYLON from 'babylonjs'

class Collider extends React.Component {
  constructor (props) {
    super(props)
    const { collisionFound, intersectionPoint, collidedMesh, collisionMask, slidePlaneNormal } = props
    this.Collider = new BABYLON.Collider()
    this.Collider.collisionFound = collisionFound
    this.Collider.intersectionPoint = intersectionPoint
    this.Collider.collidedMesh = collidedMesh
    this.Collider.collisionMask = collisionMask
    this.Collider.slidePlaneNormal = slidePlaneNormal
  }

  render () {
    return null
  }
}

export default Collider

