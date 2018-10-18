import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class StereoscopicUniversalCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, interaxialDistance, isStereoscopicSideBySide, scene } = props
    this.StereoscopicUniversalCamera = new BABYLON.StereoscopicUniversalCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(StereoscopicUniversalCamera)

