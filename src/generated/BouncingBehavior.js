import React from 'react'
import BABYLON from 'babylonjs'

class BouncingBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { name, EasingFunction, EasingMode, transitionDuration, lowerRadiusTransitionRange, upperRadiusTransitionRange, autoTransitionRange } = props
    this.BouncingBehavior = new BABYLON.BouncingBehavior()
    this.BouncingBehavior.name = name
    this.BouncingBehavior.EasingFunction = EasingFunction
    this.BouncingBehavior.EasingMode = EasingMode
    this.BouncingBehavior.transitionDuration = transitionDuration
    this.BouncingBehavior.lowerRadiusTransitionRange = lowerRadiusTransitionRange
    this.BouncingBehavior.upperRadiusTransitionRange = upperRadiusTransitionRange
    this.BouncingBehavior.autoTransitionRange = autoTransitionRange
  }

  render () {
    return null
  }
}

export default BouncingBehavior

