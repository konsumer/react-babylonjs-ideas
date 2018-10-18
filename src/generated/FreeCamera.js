import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class FreeCamera extends React.Component {
  constructor (props) {
    super(props)
    const { ellipsoid, ellipsoidOffset, checkCollisions, applyGravity, inputs, angularSensibility, keysUp, keysDown, keysLeft, keysRight, onCollide, collisionMask, name, position, scene, setActiveOnSceneIfNoneActive } = props
    this.FreeCamera = new BABYLON.FreeCamera(name, position, scene, setActiveOnSceneIfNoneActive)
    this.FreeCamera.ellipsoid = ellipsoid
    this.FreeCamera.ellipsoidOffset = ellipsoidOffset
    this.FreeCamera.checkCollisions = checkCollisions
    this.FreeCamera.applyGravity = applyGravity
    this.FreeCamera.inputs = inputs
    this.FreeCamera.angularSensibility = angularSensibility
    this.FreeCamera.keysUp = keysUp
    this.FreeCamera.keysDown = keysDown
    this.FreeCamera.keysLeft = keysLeft
    this.FreeCamera.keysRight = keysRight
    this.FreeCamera.onCollide = onCollide
    this.FreeCamera.collisionMask = collisionMask
  }

  render () {
    return null
  }
}

export default withScene(FreeCamera)

