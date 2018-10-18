import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class BoneAxesViewer extends React.Component {
  constructor (props) {
    super(props)
    const { mesh, bone, pos, xaxis, yaxis, zaxis, scene, bone, mesh, scaleLines } = props
    this.BoneAxesViewer = new BABYLON.BoneAxesViewer(scene, bone, mesh, scaleLines)
    this.BoneAxesViewer.mesh = mesh
    this.BoneAxesViewer.bone = bone
    this.BoneAxesViewer.pos = pos
    this.BoneAxesViewer.xaxis = xaxis
    this.BoneAxesViewer.yaxis = yaxis
    this.BoneAxesViewer.zaxis = zaxis
  }

  render () {
    return null
  }
}

export default withScene(BoneAxesViewer)

