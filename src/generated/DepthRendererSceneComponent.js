import React from 'react'
import { withScene } from './Scene'

class DepthRendererSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.DepthRendererSceneComponent = new DepthRendererSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(DepthRendererSceneComponent)

