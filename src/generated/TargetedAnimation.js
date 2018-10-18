import React from 'react'
import BABYLON from 'babylonjs'

class TargetedAnimation extends React.Component {
  constructor (props) {
    super(props)
    const { animation, target } = props
    this.TargetedAnimation = new BABYLON.TargetedAnimation()
    this.TargetedAnimation.animation = animation
    this.TargetedAnimation.target = target
  }

  render () {
    return null
  }
}

export default TargetedAnimation

