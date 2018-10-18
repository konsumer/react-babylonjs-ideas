import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AnaglyphUniversalCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, interaxialDistance, scene } = props
    this.AnaglyphUniversalCamera = new BABYLON.AnaglyphUniversalCamera(name, position, interaxialDistance, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(AnaglyphUniversalCamera)

