import React from 'react'
import { withScene } from './Scene'

class OutlineRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, zOffset } = props
    this.OutlineRenderer = new OutlineRenderer(name, scene, zOffset)
  }

  render () {
    return null
  }
}

export default withScene(OutlineRenderer)

