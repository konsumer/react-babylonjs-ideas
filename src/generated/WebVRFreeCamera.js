import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class WebVRFreeCamera extends React.Component {
  constructor (props) {
    super(props)
    const { webVROptions, rawPose, devicePosition, deviceRotationQuaternion, deviceScaleFactor, controllers, onControllersAttachedObservable, onControllerMeshLoadedObservable, onPoseUpdatedFromDeviceObservable, rigParenting, leftController, rightController, updateCacheCalled, name, position, scene, webVROptions } = props
    this.WebVRFreeCamera = new BABYLON.WebVRFreeCamera(name, position, scene, webVROptions)
    this.WebVRFreeCamera.webVROptions = webVROptions
    this.WebVRFreeCamera.rawPose = rawPose
    this.WebVRFreeCamera.devicePosition = devicePosition
    this.WebVRFreeCamera.deviceRotationQuaternion = deviceRotationQuaternion
    this.WebVRFreeCamera.deviceScaleFactor = deviceScaleFactor
    this.WebVRFreeCamera.controllers = controllers
    this.WebVRFreeCamera.onControllersAttachedObservable = onControllersAttachedObservable
    this.WebVRFreeCamera.onControllerMeshLoadedObservable = onControllerMeshLoadedObservable
    this.WebVRFreeCamera.onPoseUpdatedFromDeviceObservable = onPoseUpdatedFromDeviceObservable
    this.WebVRFreeCamera.rigParenting = rigParenting
    this.WebVRFreeCamera.leftController = leftController
    this.WebVRFreeCamera.rightController = rightController
    this.WebVRFreeCamera.updateCacheCalled = updateCacheCalled
  }

  render () {
    return null
  }
}

export default withScene(WebVRFreeCamera)

