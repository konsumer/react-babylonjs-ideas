import React from 'react'
import { withScene } from './Scene'

class PhysicsEngineSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.PhysicsEngineSceneComponent = new PhysicsEngineSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(PhysicsEngineSceneComponent)

