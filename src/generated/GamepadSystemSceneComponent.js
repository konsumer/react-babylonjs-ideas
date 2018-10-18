import React from 'react'
import { withScene } from './Scene'

class GamepadSystemSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.GamepadSystemSceneComponent = new GamepadSystemSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(GamepadSystemSceneComponent)

