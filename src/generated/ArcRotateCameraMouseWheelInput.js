import React from 'react'
import BABYLON from 'babylonjs'

class ArcRotateCameraMouseWheelInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, wheelPrecision, wheelDeltaPercentage } = props
    this.ArcRotateCameraMouseWheelInput = new BABYLON.ArcRotateCameraMouseWheelInput()
    this.ArcRotateCameraMouseWheelInput.camera = camera
    this.ArcRotateCameraMouseWheelInput.wheelPrecision = wheelPrecision
    this.ArcRotateCameraMouseWheelInput.wheelDeltaPercentage = wheelDeltaPercentage
  }

  render () {
    return null
  }
}

export default ArcRotateCameraMouseWheelInput

