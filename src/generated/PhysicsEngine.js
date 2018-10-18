import React from 'react'
import BABYLON from 'babylonjs'

class PhysicsEngine extends React.Component {
  constructor (props) {
    super(props)
    const { Epsilon, gravity, gravity, _physicsPlugin } = props
    this.PhysicsEngine = new BABYLON.PhysicsEngine(gravity, _physicsPlugin)
    this.PhysicsEngine.Epsilon = Epsilon
    this.PhysicsEngine.gravity = gravity
  }

  render () {
    return null
  }
}

export default PhysicsEngine

