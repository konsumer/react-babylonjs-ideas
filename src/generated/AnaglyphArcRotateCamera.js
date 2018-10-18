import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AnaglyphArcRotateCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, alpha, beta, radius, target, interaxialDistance, scene } = props
    this.AnaglyphArcRotateCamera = new BABYLON.AnaglyphArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(AnaglyphArcRotateCamera)

