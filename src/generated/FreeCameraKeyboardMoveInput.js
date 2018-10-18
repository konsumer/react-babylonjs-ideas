import React from 'react'
import BABYLON from 'babylonjs'

class FreeCameraKeyboardMoveInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, keysUp, keysDown, keysLeft, keysRight } = props
    this.FreeCameraKeyboardMoveInput = new BABYLON.FreeCameraKeyboardMoveInput()
    this.FreeCameraKeyboardMoveInput.camera = camera
    this.FreeCameraKeyboardMoveInput.keysUp = keysUp
    this.FreeCameraKeyboardMoveInput.keysDown = keysDown
    this.FreeCameraKeyboardMoveInput.keysLeft = keysLeft
    this.FreeCameraKeyboardMoveInput.keysRight = keysRight
  }

  render () {
    return null
  }
}

export default FreeCameraKeyboardMoveInput

