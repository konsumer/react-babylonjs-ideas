import React from 'react'
import { withScene } from './Scene'

class GeometryBufferRendererSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.GeometryBufferRendererSceneComponent = new GeometryBufferRendererSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(GeometryBufferRendererSceneComponent)

