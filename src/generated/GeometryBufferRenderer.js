import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GeometryBufferRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { renderList, isSupported, enablePosition, scene, ratio, samples, scene, ratio } = props
    this.GeometryBufferRenderer = new BABYLON.GeometryBufferRenderer(scene, ratio)
    this.GeometryBufferRenderer.renderList = renderList
    this.GeometryBufferRenderer.isSupported = isSupported
    this.GeometryBufferRenderer.enablePosition = enablePosition
    this.GeometryBufferRenderer.scene = scene
    this.GeometryBufferRenderer.ratio = ratio
    this.GeometryBufferRenderer.samples = samples
  }

  render () {
    return null
  }
}

export default withScene(GeometryBufferRenderer)

