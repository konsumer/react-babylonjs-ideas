import React from 'react'
import BABYLON from 'babylonjs'

class FreeCameraMouseInput extends React.Component {
  constructor (props) {
    super(props)
    const { touchEnabled, camera, buttons, angularSensibility, previousPosition, touchEnabled } = props
    this.FreeCameraMouseInput = new BABYLON.FreeCameraMouseInput(touchEnabled)
    this.FreeCameraMouseInput.touchEnabled = touchEnabled
    this.FreeCameraMouseInput.camera = camera
    this.FreeCameraMouseInput.buttons = buttons
    this.FreeCameraMouseInput.angularSensibility = angularSensibility
    this.FreeCameraMouseInput.previousPosition = previousPosition
  }

  render () {
    return null
  }
}

export default FreeCameraMouseInput

