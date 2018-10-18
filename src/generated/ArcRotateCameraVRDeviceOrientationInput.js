import React from 'react'
import BABYLON from 'babylonjs'

class ArcRotateCameraVRDeviceOrientationInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, alphaCorrection, betaCorrection, gammaCorrection } = props
    this.ArcRotateCameraVRDeviceOrientationInput = new BABYLON.ArcRotateCameraVRDeviceOrientationInput()
    this.ArcRotateCameraVRDeviceOrientationInput.camera = camera
    this.ArcRotateCameraVRDeviceOrientationInput.alphaCorrection = alphaCorrection
    this.ArcRotateCameraVRDeviceOrientationInput.betaCorrection = betaCorrection
    this.ArcRotateCameraVRDeviceOrientationInput.gammaCorrection = gammaCorrection
  }

  render () {
    return null
  }
}

export default ArcRotateCameraVRDeviceOrientationInput

