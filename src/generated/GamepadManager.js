import React from 'react'
import BABYLON from 'babylonjs'

class GamepadManager extends React.Component {
  constructor (props) {
    super(props)
    const { onGamepadConnectedObservable, onGamepadDisconnectedObservable, gamepads, _scene } = props
    this.GamepadManager = new BABYLON.GamepadManager(_scene)
    this.GamepadManager.onGamepadConnectedObservable = onGamepadConnectedObservable
    this.GamepadManager.onGamepadDisconnectedObservable = onGamepadDisconnectedObservable
    this.GamepadManager.gamepads = gamepads
  }

  render () {
    return null
  }
}

export default GamepadManager

