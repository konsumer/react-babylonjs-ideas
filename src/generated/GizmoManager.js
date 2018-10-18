import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GizmoManager extends React.Component {
  constructor (props) {
    super(props)
    const { scene, gizmos, boundingBoxDragBehavior, attachableMeshes, usePointerToAttachGizmos, positionGizmoEnabled, rotationGizmoEnabled, scaleGizmoEnabled, boundingBoxGizmoEnabled, scene } = props
    this.GizmoManager = new BABYLON.GizmoManager(scene)
    this.GizmoManager.scene = scene
    this.GizmoManager.gizmos = gizmos
    this.GizmoManager.boundingBoxDragBehavior = boundingBoxDragBehavior
    this.GizmoManager.attachableMeshes = attachableMeshes
    this.GizmoManager.usePointerToAttachGizmos = usePointerToAttachGizmos
    this.GizmoManager.positionGizmoEnabled = positionGizmoEnabled
    this.GizmoManager.rotationGizmoEnabled = rotationGizmoEnabled
    this.GizmoManager.scaleGizmoEnabled = scaleGizmoEnabled
    this.GizmoManager.boundingBoxGizmoEnabled = boundingBoxGizmoEnabled
  }

  render () {
    return null
  }
}

export default withScene(GizmoManager)

