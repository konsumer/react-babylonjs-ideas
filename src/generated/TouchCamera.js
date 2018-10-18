import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class TouchCamera extends React.Component {
  constructor (props) {
    super(props)
    const { touchAngularSensibility, touchMoveSensibility, name, position, scene } = props
    this.TouchCamera = new BABYLON.TouchCamera(name, position, scene)
    this.TouchCamera.touchAngularSensibility = touchAngularSensibility
    this.TouchCamera.touchMoveSensibility = touchMoveSensibility
  }

  render () {
    return null
  }
}

export default withScene(TouchCamera)

