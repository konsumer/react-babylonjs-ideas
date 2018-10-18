import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class FollowCamera extends React.Component {
  constructor (props) {
    super(props)
    const { radius, rotationOffset, heightOffset, cameraAcceleration, maxCameraSpeed, lockedTarget, name, position, scene, lockedTarget } = props
    this.FollowCamera = new BABYLON.FollowCamera(name, position, scene, lockedTarget)
    this.FollowCamera.radius = radius
    this.FollowCamera.rotationOffset = rotationOffset
    this.FollowCamera.heightOffset = heightOffset
    this.FollowCamera.cameraAcceleration = cameraAcceleration
    this.FollowCamera.maxCameraSpeed = maxCameraSpeed
    this.FollowCamera.lockedTarget = lockedTarget
  }

  render () {
    return null
  }
}

export default withScene(FollowCamera)

