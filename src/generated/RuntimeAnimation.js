import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RuntimeAnimation extends React.Component {
  constructor (props) {
    super(props)
    const { currentFrame, weight, currentValue, targetPath, target, animation, target, animation, scene, host } = props
    this.RuntimeAnimation = new BABYLON.RuntimeAnimation(target, animation, scene, host)
    this.RuntimeAnimation.currentFrame = currentFrame
    this.RuntimeAnimation.weight = weight
    this.RuntimeAnimation.currentValue = currentValue
    this.RuntimeAnimation.targetPath = targetPath
    this.RuntimeAnimation.target = target
    this.RuntimeAnimation.animation = animation
  }

  render () {
    return null
  }
}

export default withScene(RuntimeAnimation)

