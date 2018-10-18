import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SkeletonViewer extends React.Component {
  constructor (props) {
    super(props)
    const { skeleton, mesh, autoUpdateBonesMatrices, renderingGroupId, color, isEnabled, skeleton, mesh, scene, autoUpdateBonesMatrices, renderingGroupId } = props
    this.SkeletonViewer = new BABYLON.SkeletonViewer(skeleton, mesh, scene, autoUpdateBonesMatrices, renderingGroupId)
    this.SkeletonViewer.skeleton = skeleton
    this.SkeletonViewer.mesh = mesh
    this.SkeletonViewer.autoUpdateBonesMatrices = autoUpdateBonesMatrices
    this.SkeletonViewer.renderingGroupId = renderingGroupId
    this.SkeletonViewer.color = color
    this.SkeletonViewer.isEnabled = isEnabled
  }

  render () {
    return null
  }
}

export default withScene(SkeletonViewer)

