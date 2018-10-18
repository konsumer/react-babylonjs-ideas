import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AnaglyphGamepadCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, interaxialDistance, scene } = props
    this.AnaglyphGamepadCamera = new BABYLON.AnaglyphGamepadCamera(name, position, interaxialDistance, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(AnaglyphGamepadCamera)

