import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PhysicsGravitationalFieldEvent extends React.Component {
  constructor (props) {
    super(props)
    const { physicsHelper, scene, origin, radius, strength, falloff } = props
    this.PhysicsGravitationalFieldEvent = new BABYLON.PhysicsGravitationalFieldEvent(physicsHelper, scene, origin, radius, strength, falloff)
    
  }

  render () {
    return null
  }
}

export default withScene(PhysicsGravitationalFieldEvent)

