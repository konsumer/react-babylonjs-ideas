import React from 'react'
import BABYLON from 'babylonjs'

class Gamepad extends React.Component {
  constructor (props) {
    super(props)
    const { id, index, browserGamepad, type, GAMEPAD, GENERIC, XBOX, POSE_ENABLED, isConnected, leftStick, rightStick, id, index, browserGamepad, leftStickX, leftStickY, rightStickX, rightStickY } = props
    this.Gamepad = new BABYLON.Gamepad(id, index, browserGamepad, leftStickX, leftStickY, rightStickX, rightStickY)
    this.Gamepad.id = id
    this.Gamepad.index = index
    this.Gamepad.browserGamepad = browserGamepad
    this.Gamepad.type = type
    this.Gamepad.GAMEPAD = GAMEPAD
    this.Gamepad.GENERIC = GENERIC
    this.Gamepad.XBOX = XBOX
    this.Gamepad.POSE_ENABLED = POSE_ENABLED
    this.Gamepad.isConnected = isConnected
    this.Gamepad.leftStick = leftStick
    this.Gamepad.rightStick = rightStick
  }

  render () {
    return null
  }
}

export default Gamepad

