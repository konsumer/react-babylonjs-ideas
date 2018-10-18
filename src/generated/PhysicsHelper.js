import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PhysicsHelper extends React.Component {
  constructor (props) {
    super(props)
    const { scene } = props
    this.PhysicsHelper = new BABYLON.PhysicsHelper(scene)
    
  }

  render () {
    return null
  }
}

export default withScene(PhysicsHelper)

