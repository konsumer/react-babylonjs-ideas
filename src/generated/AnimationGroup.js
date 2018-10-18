import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AnimationGroup extends React.Component {
  constructor (props) {
    super(props)
    const { name, onAnimationEndObservable, onAnimationGroupEndObservable, onAnimationGroupPauseObservable, from, to, isStarted, speedRatio, targetedAnimations, animatables, name, scene } = props
    this.AnimationGroup = new BABYLON.AnimationGroup(name, scene)
    this.AnimationGroup.name = name
    this.AnimationGroup.onAnimationEndObservable = onAnimationEndObservable
    this.AnimationGroup.onAnimationGroupEndObservable = onAnimationGroupEndObservable
    this.AnimationGroup.onAnimationGroupPauseObservable = onAnimationGroupPauseObservable
    this.AnimationGroup.from = from
    this.AnimationGroup.to = to
    this.AnimationGroup.isStarted = isStarted
    this.AnimationGroup.speedRatio = speedRatio
    this.AnimationGroup.targetedAnimations = targetedAnimations
    this.AnimationGroup.animatables = animatables
  }

  render () {
    return null
  }
}

export default withScene(AnimationGroup)

