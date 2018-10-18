import React from 'react'
import BABYLON from 'babylonjs'

class PoseEnabledController extends React.Component {
  constructor (props) {
    super(props)
    const { devicePosition, deviceRotationQuaternion, deviceScaleFactor, position, rotationQuaternion, controllerType, rawPose, POINTING_POSE, mesh, browserGamepad } = props
    this.PoseEnabledController = new BABYLON.PoseEnabledController(browserGamepad)
    this.PoseEnabledController.devicePosition = devicePosition
    this.PoseEnabledController.deviceRotationQuaternion = deviceRotationQuaternion
    this.PoseEnabledController.deviceScaleFactor = deviceScaleFactor
    this.PoseEnabledController.position = position
    this.PoseEnabledController.rotationQuaternion = rotationQuaternion
    this.PoseEnabledController.controllerType = controllerType
    this.PoseEnabledController.rawPose = rawPose
    this.PoseEnabledController.POINTING_POSE = POINTING_POSE
    this.PoseEnabledController.mesh = mesh
  }

  render () {
    return null
  }
}

export default PoseEnabledController

