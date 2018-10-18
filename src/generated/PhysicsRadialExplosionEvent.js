import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PhysicsRadialExplosionEvent extends React.Component {
  constructor (props) {
    super(props)
    const { scene } = props
    this.PhysicsRadialExplosionEvent = new BABYLON.PhysicsRadialExplosionEvent(scene)
    
  }

  render () {
    return null
  }
}

export default withScene(PhysicsRadialExplosionEvent)

