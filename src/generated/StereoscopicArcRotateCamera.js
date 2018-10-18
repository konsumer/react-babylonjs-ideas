import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class StereoscopicArcRotateCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene } = props
    this.StereoscopicArcRotateCamera = new BABYLON.StereoscopicArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(StereoscopicArcRotateCamera)

