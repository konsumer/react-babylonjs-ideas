import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class StereoscopicFreeCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, interaxialDistance, isStereoscopicSideBySide, scene } = props
    this.StereoscopicFreeCamera = new BABYLON.StereoscopicFreeCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(StereoscopicFreeCamera)

