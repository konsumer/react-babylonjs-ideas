import React from 'react'
import BABYLON from 'babylonjs'

class RenderingGroupInfo extends React.Component {
  constructor (props) {
    super(props)
    const { scene, camera, renderingGroupId } = props
    this.RenderingGroupInfo = new BABYLON.RenderingGroupInfo()
    this.RenderingGroupInfo.scene = scene
    this.RenderingGroupInfo.camera = camera
    this.RenderingGroupInfo.renderingGroupId = renderingGroupId
  }

  render () {
    return null
  }
}

export default RenderingGroupInfo

