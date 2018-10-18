import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Animatable extends React.Component {
  constructor (props) {
    super(props)
    const { target, fromFrame, toFrame, loopAnimation, onAnimationEnd, disposeOnEnd, animationStarted, onAnimationEndObservable, syncRoot, masterFrame, weight, speedRatio, scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations } = props
    this.Animatable = new BABYLON.Animatable(scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations)
    this.Animatable.target = target
    this.Animatable.fromFrame = fromFrame
    this.Animatable.toFrame = toFrame
    this.Animatable.loopAnimation = loopAnimation
    this.Animatable.onAnimationEnd = onAnimationEnd
    this.Animatable.disposeOnEnd = disposeOnEnd
    this.Animatable.animationStarted = animationStarted
    this.Animatable.onAnimationEndObservable = onAnimationEndObservable
    this.Animatable.syncRoot = syncRoot
    this.Animatable.masterFrame = masterFrame
    this.Animatable.weight = weight
    this.Animatable.speedRatio = speedRatio
  }

  render () {
    return null
  }
}

export default withScene(Animatable)

