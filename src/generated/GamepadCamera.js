import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GamepadCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, scene } = props
    this.GamepadCamera = new BABYLON.GamepadCamera(name, position, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(GamepadCamera)

