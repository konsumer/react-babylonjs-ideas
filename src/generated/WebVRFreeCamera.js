import React from 'react'

class WebVRFreeCamera extends React.Component {
  constructor (props) {
    super(props)
    const { webVROptions, rawPose, devicePosition, deviceRotationQuaternion, deviceScaleFactor, controllers, onControllersAttachedObservable, onControllerMeshLoadedObservable, onPoseUpdatedFromDeviceObservable, rigParenting, leftController, rightController, updateCacheCalled } = props
    this.WebVRFreeCamera = new WebVRFreeCamera(webVROptions, rawPose, devicePosition, deviceRotationQuaternion, deviceScaleFactor, controllers, onControllersAttachedObservable, onControllerMeshLoadedObservable, onPoseUpdatedFromDeviceObservable, rigParenting, leftController, rightController, updateCacheCalled)
  }

  render () {
    return null
  }
}

export default WebVRFreeCamera

