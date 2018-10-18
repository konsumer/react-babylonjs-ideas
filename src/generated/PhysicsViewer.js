import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PhysicsViewer extends React.Component {
  constructor (props) {
    super(props)
    const { scene } = props
    this.PhysicsViewer = new BABYLON.PhysicsViewer(scene)
    
  }

  render () {
    return null
  }
}

export default withScene(PhysicsViewer)

