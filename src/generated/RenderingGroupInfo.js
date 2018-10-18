import React from 'react'
import { withScene } from './Scene'

class RenderingGroupInfo extends React.Component {
  constructor (props) {
    super(props)
    const { scene, camera, renderingGroupId } = props
    this.RenderingGroupInfo = new RenderingGroupInfo(scene, camera, renderingGroupId)
  }

  render () {
    return null
  }
}

export default withScene(RenderingGroupInfo)

