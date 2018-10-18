import React from 'react'
import BABYLON from 'babylonjs'

class ArcRotateCameraKeyboardMoveInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, keysUp, keysDown, keysLeft, keysRight, keysReset, panningSensibility, zoomingSensibility, useAltToZoom, angularSpeed } = props
    this.ArcRotateCameraKeyboardMoveInput = new BABYLON.ArcRotateCameraKeyboardMoveInput()
    this.ArcRotateCameraKeyboardMoveInput.camera = camera
    this.ArcRotateCameraKeyboardMoveInput.keysUp = keysUp
    this.ArcRotateCameraKeyboardMoveInput.keysDown = keysDown
    this.ArcRotateCameraKeyboardMoveInput.keysLeft = keysLeft
    this.ArcRotateCameraKeyboardMoveInput.keysRight = keysRight
    this.ArcRotateCameraKeyboardMoveInput.keysReset = keysReset
    this.ArcRotateCameraKeyboardMoveInput.panningSensibility = panningSensibility
    this.ArcRotateCameraKeyboardMoveInput.zoomingSensibility = zoomingSensibility
    this.ArcRotateCameraKeyboardMoveInput.useAltToZoom = useAltToZoom
    this.ArcRotateCameraKeyboardMoveInput.angularSpeed = angularSpeed
  }

  render () {
    return null
  }
}

export default ArcRotateCameraKeyboardMoveInput

