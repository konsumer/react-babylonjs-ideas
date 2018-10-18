import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ArcFollowCamera extends React.Component {
  constructor (props) {
    super(props)
    const { alpha, beta, radius, target, name, alpha, beta, radius, target, scene } = props
    this.ArcFollowCamera = new BABYLON.ArcFollowCamera(name, alpha, beta, radius, target, scene)
    this.ArcFollowCamera.alpha = alpha
    this.ArcFollowCamera.beta = beta
    this.ArcFollowCamera.radius = radius
    this.ArcFollowCamera.target = target
  }

  render () {
    return null
  }
}

export default withScene(ArcFollowCamera)

