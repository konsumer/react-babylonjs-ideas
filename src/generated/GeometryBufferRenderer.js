import React from 'react'
import { withScene } from './Scene'

class GeometryBufferRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { renderList, isSupported, enablePosition, scene, ratio, samples } = props
    this.GeometryBufferRenderer = new GeometryBufferRenderer(renderList, isSupported, enablePosition, scene, ratio, samples)
  }

  render () {
    return null
  }
}

export default withScene(GeometryBufferRenderer)

