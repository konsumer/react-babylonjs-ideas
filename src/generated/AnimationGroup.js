import React from 'react'

class AnimationGroup extends React.Component {
  constructor (props) {
    super(props)
    const { name, onAnimationEndObservable, onAnimationGroupEndObservable, onAnimationGroupPauseObservable, from, to, isStarted, speedRatio, targetedAnimations, animatables } = props
    this.AnimationGroup = new AnimationGroup(name, onAnimationEndObservable, onAnimationGroupEndObservable, onAnimationGroupPauseObservable, from, to, isStarted, speedRatio, targetedAnimations, animatables)
  }

  render () {
    return null
  }
}

export default AnimationGroup

