import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AnaglyphFreeCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, interaxialDistance, scene } = props
    this.AnaglyphFreeCamera = new BABYLON.AnaglyphFreeCamera(name, position, interaxialDistance, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(AnaglyphFreeCamera)

