import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class VRDeviceOrientationFreeCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, scene, compensateDistortion, vrCameraMetrics } = props
    this.VRDeviceOrientationFreeCamera = new BABYLON.VRDeviceOrientationFreeCamera(name, position, scene, compensateDistortion, vrCameraMetrics)
    
  }

  render () {
    return null
  }
}

export default withScene(VRDeviceOrientationFreeCamera)

