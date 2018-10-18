import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DeviceOrientationCamera extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, scene } = props
    this.DeviceOrientationCamera = new BABYLON.DeviceOrientationCamera(name, position, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(DeviceOrientationCamera)

