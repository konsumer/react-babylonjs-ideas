import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class VirtualJoysticksCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, scene } = props
    this.VirtualJoysticksCamera = new BABYLON.VirtualJoysticksCamera(name, position, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(VirtualJoysticksCamera)

