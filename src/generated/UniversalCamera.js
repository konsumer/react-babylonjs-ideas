import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class UniversalCamera extends React.Component {
  constructor (props) {
    super(props)
    const { gamepadAngularSensibility, gamepadMoveSensibility, name, position, scene } = props
    this.UniversalCamera = new BABYLON.UniversalCamera(name, position, scene)
    this.UniversalCamera.gamepadAngularSensibility = gamepadAngularSensibility
    this.UniversalCamera.gamepadMoveSensibility = gamepadMoveSensibility
  }

  render () {
    return null
  }
}

export default withScene(UniversalCamera)

