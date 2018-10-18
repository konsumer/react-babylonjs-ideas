import React from 'react'

class Animatable extends React.Component {
  constructor (props) {
    super(props)
    const { target, fromFrame, toFrame, loopAnimation, onAnimationEnd, disposeOnEnd, animationStarted, onAnimationEndObservable, syncRoot, masterFrame, weight, speedRatio } = props
    this.Animatable = new Animatable(target, fromFrame, toFrame, loopAnimation, onAnimationEnd, disposeOnEnd, animationStarted, onAnimationEndObservable, syncRoot, masterFrame, weight, speedRatio)
  }

  render () {
    return null
  }
}

export default Animatable

