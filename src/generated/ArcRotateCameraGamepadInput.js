import React from 'react'
import BABYLON from 'babylonjs'

class ArcRotateCameraGamepadInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, gamepad, gamepadRotationSensibility, gamepadMoveSensibility } = props
    this.ArcRotateCameraGamepadInput = new BABYLON.ArcRotateCameraGamepadInput()
    this.ArcRotateCameraGamepadInput.camera = camera
    this.ArcRotateCameraGamepadInput.gamepad = gamepad
    this.ArcRotateCameraGamepadInput.gamepadRotationSensibility = gamepadRotationSensibility
    this.ArcRotateCameraGamepadInput.gamepadMoveSensibility = gamepadMoveSensibility
  }

  render () {
    return null
  }
}

export default ArcRotateCameraGamepadInput

