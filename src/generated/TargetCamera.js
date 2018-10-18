import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class TargetCamera extends React.Component {
  constructor (props) {
    super(props)
    const { cameraDirection, cameraRotation, rotation, rotationQuaternion, speed, noRotationConstraint, lockedTarget, name, position, scene, setActiveOnSceneIfNoneActive } = props
    this.TargetCamera = new BABYLON.TargetCamera(name, position, scene, setActiveOnSceneIfNoneActive)
    this.TargetCamera.cameraDirection = cameraDirection
    this.TargetCamera.cameraRotation = cameraRotation
    this.TargetCamera.rotation = rotation
    this.TargetCamera.rotationQuaternion = rotationQuaternion
    this.TargetCamera.speed = speed
    this.TargetCamera.noRotationConstraint = noRotationConstraint
    this.TargetCamera.lockedTarget = lockedTarget
  }

  render () {
    return null
  }
}

export default withScene(TargetCamera)

