import React from 'react'
import BABYLON from 'babylonjs'

class PhysicsUpdraftEvent extends React.Component {
  constructor (props) {
    super(props)
    const { getImpostorForceAndContactPoint, _scene, _origin, _radius, _strength, _height, _updraftMode } = props
    this.PhysicsUpdraftEvent = new BABYLON.PhysicsUpdraftEvent(_scene, _origin, _radius, _strength, _height, _updraftMode)
    this.PhysicsUpdraftEvent.getImpostorForceAndContactPoint = getImpostorForceAndContactPoint
  }

  render () {
    return null
  }
}

export default PhysicsUpdraftEvent

