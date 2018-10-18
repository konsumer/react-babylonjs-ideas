import React from 'react'
import { withScene } from './Scene'

class EffectLayerSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.EffectLayerSceneComponent = new EffectLayerSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(EffectLayerSceneComponent)

