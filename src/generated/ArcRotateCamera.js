import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ArcRotateCamera extends React.Component {
  constructor (props) {
    super(props)
    const { alpha, beta, radius, target, inertialAlphaOffset, inertialBetaOffset, inertialRadiusOffset, lowerAlphaLimit, upperAlphaLimit, lowerBetaLimit, upperBetaLimit, lowerRadiusLimit, upperRadiusLimit, inertialPanningX, inertialPanningY, pinchToPanMaxDistance, panningDistanceLimit, panningOriginTarget, panningInertia, angularSensibilityX, angularSensibilityY, pinchPrecision, pinchDeltaPercentage, panningSensibility, keysUp, keysDown, keysLeft, keysRight, wheelPrecision, wheelDeltaPercentage, zoomOnFactor, targetScreenOffset, allowUpsideDown, useInputToRestoreState, inputs, panningAxis, bouncingBehavior, useBouncingBehavior, framingBehavior, useFramingBehavior, autoRotationBehavior, useAutoRotationBehavior, onMeshTargetChangedObservable, onCollide, checkCollisions, collisionRadius, name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive } = props
    this.ArcRotateCamera = new BABYLON.ArcRotateCamera(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive)
    this.ArcRotateCamera.alpha = alpha
    this.ArcRotateCamera.beta = beta
    this.ArcRotateCamera.radius = radius
    this.ArcRotateCamera.target = target
    this.ArcRotateCamera.inertialAlphaOffset = inertialAlphaOffset
    this.ArcRotateCamera.inertialBetaOffset = inertialBetaOffset
    this.ArcRotateCamera.inertialRadiusOffset = inertialRadiusOffset
    this.ArcRotateCamera.lowerAlphaLimit = lowerAlphaLimit
    this.ArcRotateCamera.upperAlphaLimit = upperAlphaLimit
    this.ArcRotateCamera.lowerBetaLimit = lowerBetaLimit
    this.ArcRotateCamera.upperBetaLimit = upperBetaLimit
    this.ArcRotateCamera.lowerRadiusLimit = lowerRadiusLimit
    this.ArcRotateCamera.upperRadiusLimit = upperRadiusLimit
    this.ArcRotateCamera.inertialPanningX = inertialPanningX
    this.ArcRotateCamera.inertialPanningY = inertialPanningY
    this.ArcRotateCamera.pinchToPanMaxDistance = pinchToPanMaxDistance
    this.ArcRotateCamera.panningDistanceLimit = panningDistanceLimit
    this.ArcRotateCamera.panningOriginTarget = panningOriginTarget
    this.ArcRotateCamera.panningInertia = panningInertia
    this.ArcRotateCamera.angularSensibilityX = angularSensibilityX
    this.ArcRotateCamera.angularSensibilityY = angularSensibilityY
    this.ArcRotateCamera.pinchPrecision = pinchPrecision
    this.ArcRotateCamera.pinchDeltaPercentage = pinchDeltaPercentage
    this.ArcRotateCamera.panningSensibility = panningSensibility
    this.ArcRotateCamera.keysUp = keysUp
    this.ArcRotateCamera.keysDown = keysDown
    this.ArcRotateCamera.keysLeft = keysLeft
    this.ArcRotateCamera.keysRight = keysRight
    this.ArcRotateCamera.wheelPrecision = wheelPrecision
    this.ArcRotateCamera.wheelDeltaPercentage = wheelDeltaPercentage
    this.ArcRotateCamera.zoomOnFactor = zoomOnFactor
    this.ArcRotateCamera.targetScreenOffset = targetScreenOffset
    this.ArcRotateCamera.allowUpsideDown = allowUpsideDown
    this.ArcRotateCamera.useInputToRestoreState = useInputToRestoreState
    this.ArcRotateCamera.inputs = inputs
    this.ArcRotateCamera.panningAxis = panningAxis
    this.ArcRotateCamera.bouncingBehavior = bouncingBehavior
    this.ArcRotateCamera.useBouncingBehavior = useBouncingBehavior
    this.ArcRotateCamera.framingBehavior = framingBehavior
    this.ArcRotateCamera.useFramingBehavior = useFramingBehavior
    this.ArcRotateCamera.autoRotationBehavior = autoRotationBehavior
    this.ArcRotateCamera.useAutoRotationBehavior = useAutoRotationBehavior
    this.ArcRotateCamera.onMeshTargetChangedObservable = onMeshTargetChangedObservable
    this.ArcRotateCamera.onCollide = onCollide
    this.ArcRotateCamera.checkCollisions = checkCollisions
    this.ArcRotateCamera.collisionRadius = collisionRadius
  }

  render () {
    return null
  }
}

export default withScene(ArcRotateCamera)

