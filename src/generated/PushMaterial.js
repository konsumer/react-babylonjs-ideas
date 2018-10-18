import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PushMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.PushMaterial = new BABYLON.PushMaterial(name, scene)
    
  }

  render () {
    return null
  }
}

export default withScene(PushMaterial)

