import React from 'react'
import { withScene } from './Scene'

class LayerSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.LayerSceneComponent = new LayerSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(LayerSceneComponent)

