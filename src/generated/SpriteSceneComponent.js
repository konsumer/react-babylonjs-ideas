import React from 'react'
import { withScene } from './Scene'

class SpriteSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.SpriteSceneComponent = new SpriteSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(SpriteSceneComponent)

