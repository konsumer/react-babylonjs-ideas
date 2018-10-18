import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class HemisphericLight extends React.Component {
  constructor (props) {
    super(props)
    const { groundColor, direction, name, direction, scene } = props
    this.HemisphericLight = new BABYLON.HemisphericLight(name, direction, scene)
    this.HemisphericLight.groundColor = groundColor
    this.HemisphericLight.direction = direction
  }

  render () {
    return null
  }
}

export default withScene(HemisphericLight)

