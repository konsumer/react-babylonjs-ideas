import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class VRDeviceOrientationArcRotateCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics } = props
    this.VRDeviceOrientationArcRotateCamera = new BABYLON.VRDeviceOrientationArcRotateCamera(name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics)
    
  }

  render () {
    return null
  }
}

export default withScene(VRDeviceOrientationArcRotateCamera)

