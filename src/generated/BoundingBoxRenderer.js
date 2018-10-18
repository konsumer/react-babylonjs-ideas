import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class BoundingBoxRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, frontColor, backColor, showBackLines, renderList, scene } = props
    this.BoundingBoxRenderer = new BABYLON.BoundingBoxRenderer(scene)
    this.BoundingBoxRenderer.name = name
    this.BoundingBoxRenderer.scene = scene
    this.BoundingBoxRenderer.frontColor = frontColor
    this.BoundingBoxRenderer.backColor = backColor
    this.BoundingBoxRenderer.showBackLines = showBackLines
    this.BoundingBoxRenderer.renderList = renderList
  }

  render () {
    return null
  }
}

export default withScene(BoundingBoxRenderer)

