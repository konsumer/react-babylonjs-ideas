import React from 'react'
import { withScene } from './Scene'

class BoundingBoxRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, frontColor, backColor, showBackLines, renderList } = props
    this.BoundingBoxRenderer = new BoundingBoxRenderer(name, scene, frontColor, backColor, showBackLines, renderList)
  }

  render () {
    return null
  }
}

export default withScene(BoundingBoxRenderer)

