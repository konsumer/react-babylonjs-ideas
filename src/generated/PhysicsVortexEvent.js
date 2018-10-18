import React from 'react'
import BABYLON from 'babylonjs'

class PhysicsVortexEvent extends React.Component {
  constructor (props) {
    super(props)
    const { getImpostorForceAndContactPoint, _scene, _origin, _radius, _strength, _height } = props
    this.PhysicsVortexEvent = new BABYLON.PhysicsVortexEvent(_scene, _origin, _radius, _strength, _height)
    this.PhysicsVortexEvent.getImpostorForceAndContactPoint = getImpostorForceAndContactPoint
  }

  render () {
    return null
  }
}

export default PhysicsVortexEvent

