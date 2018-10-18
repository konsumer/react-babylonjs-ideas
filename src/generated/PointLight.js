import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PointLight extends React.Component {
  constructor (props) {
    super(props)
    const { shadowAngle, direction, name, position, scene } = props
    this.PointLight = new BABYLON.PointLight(name, position, scene)
    this.PointLight.shadowAngle = shadowAngle
    this.PointLight.direction = direction
  }

  render () {
    return null
  }
}

export default withScene(PointLight)

