import React from 'react'
import BABYLON from 'babylonjs'

class FreeCameraVirtualJoystickInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera } = props
    this.FreeCameraVirtualJoystickInput = new BABYLON.FreeCameraVirtualJoystickInput()
    this.FreeCameraVirtualJoystickInput.camera = camera
  }

  render () {
    return null
  }
}

export default FreeCameraVirtualJoystickInput

