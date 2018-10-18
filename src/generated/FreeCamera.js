import React from 'react'

class FreeCamera extends React.Component {
  constructor (props) {
    super(props)
    const { ellipsoid, ellipsoidOffset, checkCollisions, applyGravity, inputs, angularSensibility, keysUp, keysDown, keysLeft, keysRight, onCollide, collisionMask } = props
    this.FreeCamera = new FreeCamera(ellipsoid, ellipsoidOffset, checkCollisions, applyGravity, inputs, angularSensibility, keysUp, keysDown, keysLeft, keysRight, onCollide, collisionMask)
  }

  render () {
    return null
  }
}

export default FreeCamera

