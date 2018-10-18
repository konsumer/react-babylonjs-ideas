import React from 'react'
import BABYLON from 'babylonjs'

class ArcRotateCameraPointersInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, buttons, angularSensibilityX, angularSensibilityY, pinchPrecision, pinchDeltaPercentage, panningSensibility, multiTouchPanning, multiTouchPanAndZoom, pinchInwards } = props
    this.ArcRotateCameraPointersInput = new BABYLON.ArcRotateCameraPointersInput()
    this.ArcRotateCameraPointersInput.camera = camera
    this.ArcRotateCameraPointersInput.buttons = buttons
    this.ArcRotateCameraPointersInput.angularSensibilityX = angularSensibilityX
    this.ArcRotateCameraPointersInput.angularSensibilityY = angularSensibilityY
    this.ArcRotateCameraPointersInput.pinchPrecision = pinchPrecision
    this.ArcRotateCameraPointersInput.pinchDeltaPercentage = pinchDeltaPercentage
    this.ArcRotateCameraPointersInput.panningSensibility = panningSensibility
    this.ArcRotateCameraPointersInput.multiTouchPanning = multiTouchPanning
    this.ArcRotateCameraPointersInput.multiTouchPanAndZoom = multiTouchPanAndZoom
    this.ArcRotateCameraPointersInput.pinchInwards = pinchInwards
  }

  render () {
    return null
  }
}

export default ArcRotateCameraPointersInput

