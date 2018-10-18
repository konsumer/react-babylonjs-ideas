import React from 'react'
import BABYLON from 'babylonjs'

class FreeCameraGamepadInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, gamepad, gamepadAngularSensibility, gamepadMoveSensibility } = props
    this.FreeCameraGamepadInput = new BABYLON.FreeCameraGamepadInput()
    this.FreeCameraGamepadInput.camera = camera
    this.FreeCameraGamepadInput.gamepad = gamepad
    this.FreeCameraGamepadInput.gamepadAngularSensibility = gamepadAngularSensibility
    this.FreeCameraGamepadInput.gamepadMoveSensibility = gamepadMoveSensibility
  }

  render () {
    return null
  }
}

export default FreeCameraGamepadInput

