import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class VRDeviceOrientationGamepadCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, scene, compensateDistortion, vrCameraMetrics } = props
    this.VRDeviceOrientationGamepadCamera = new BABYLON.VRDeviceOrientationGamepadCamera(name, position, scene, compensateDistortion, vrCameraMetrics)
    
  }

  render () {
    return null
  }
}

export default withScene(VRDeviceOrientationGamepadCamera)

