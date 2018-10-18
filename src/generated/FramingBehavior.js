import React from 'react'
import BABYLON from 'babylonjs'

class FramingBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { name, EasingFunction, EasingMode, mode, radiusScale, positionScale, defaultElevation, elevationReturnTime, elevationReturnWaitTime, zoomStopsAnimation, framingTime, autoCorrectCameraLimitsAndSensibility, isUserIsMoving, IgnoreBoundsSizeMode, FitFrustumSidesMode } = props
    this.FramingBehavior = new BABYLON.FramingBehavior()
    this.FramingBehavior.name = name
    this.FramingBehavior.EasingFunction = EasingFunction
    this.FramingBehavior.EasingMode = EasingMode
    this.FramingBehavior.mode = mode
    this.FramingBehavior.radiusScale = radiusScale
    this.FramingBehavior.positionScale = positionScale
    this.FramingBehavior.defaultElevation = defaultElevation
    this.FramingBehavior.elevationReturnTime = elevationReturnTime
    this.FramingBehavior.elevationReturnWaitTime = elevationReturnWaitTime
    this.FramingBehavior.zoomStopsAnimation = zoomStopsAnimation
    this.FramingBehavior.framingTime = framingTime
    this.FramingBehavior.autoCorrectCameraLimitsAndSensibility = autoCorrectCameraLimitsAndSensibility
    this.FramingBehavior.isUserIsMoving = isUserIsMoving
    this.FramingBehavior.IgnoreBoundsSizeMode = IgnoreBoundsSizeMode
    this.FramingBehavior.FitFrustumSidesMode = FitFrustumSidesMode
  }

  render () {
    return null
  }
}

export default FramingBehavior

