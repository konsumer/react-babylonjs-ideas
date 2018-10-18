import React from 'react'
import BABYLON from 'babylonjs'

class InterpolateValueAction extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value, duration, stopOtherAnimations, onInterpolationDone, onInterpolationDoneObservable, triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone } = props
    this.InterpolateValueAction = new BABYLON.InterpolateValueAction(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone)
    this.InterpolateValueAction.propertyPath = propertyPath
    this.InterpolateValueAction.value = value
    this.InterpolateValueAction.duration = duration
    this.InterpolateValueAction.stopOtherAnimations = stopOtherAnimations
    this.InterpolateValueAction.onInterpolationDone = onInterpolationDone
    this.InterpolateValueAction.onInterpolationDoneObservable = onInterpolationDoneObservable
  }

  render () {
    return null
  }
}

export default InterpolateValueAction

