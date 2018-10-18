import React from 'react'
import BABYLON from 'babylonjs'

class FreeCameraDeviceOrientationInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera } = props
    this.FreeCameraDeviceOrientationInput = new BABYLON.FreeCameraDeviceOrientationInput()
    this.FreeCameraDeviceOrientationInput.camera = camera
  }

  render () {
    return null
  }
}

export default FreeCameraDeviceOrientationInput

