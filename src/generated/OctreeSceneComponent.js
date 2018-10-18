import React from 'react'
import { withScene } from './Scene'

class OctreeSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, checksIsEnabled } = props
    this.OctreeSceneComponent = new OctreeSceneComponent(name, scene, checksIsEnabled)
  }

  render () {
    return null
  }
}

export default withScene(OctreeSceneComponent)

