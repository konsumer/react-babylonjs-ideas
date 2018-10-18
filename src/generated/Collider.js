import React from 'react'

class Collider extends React.Component {
  constructor (props) {
    super(props)
    const { collisionFound, intersectionPoint, collidedMesh, collisionMask, slidePlaneNormal } = props
    this.Collider = new Collider(collisionFound, intersectionPoint, collidedMesh, collisionMask, slidePlaneNormal)
  }

  render () {
    return null
  }
}

export default Collider

