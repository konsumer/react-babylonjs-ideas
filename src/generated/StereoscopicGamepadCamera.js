import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class StereoscopicGamepadCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, interaxialDistance, isStereoscopicSideBySide, scene } = props
    this.StereoscopicGamepadCamera = new BABYLON.StereoscopicGamepadCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(StereoscopicGamepadCamera)

