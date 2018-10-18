import React from 'react'
import BABYLON from 'babylonjs'

class RotationGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { xGizmo, yGizmo, zGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio, gizmoLayer, tessellation } = props
    this.RotationGizmo = new BABYLON.RotationGizmo(gizmoLayer, tessellation)
    this.RotationGizmo.xGizmo = xGizmo
    this.RotationGizmo.yGizmo = yGizmo
    this.RotationGizmo.zGizmo = zGizmo
    this.RotationGizmo.onDragStartObservable = onDragStartObservable
    this.RotationGizmo.onDragEndObservable = onDragEndObservable
    this.RotationGizmo.attachedMesh = attachedMesh
    this.RotationGizmo.updateGizmoRotationToMatchAttachedMesh = updateGizmoRotationToMatchAttachedMesh
    this.RotationGizmo.snapDistance = snapDistance
    this.RotationGizmo.scaleRatio = scaleRatio
  }

  render () {
    return null
  }
}

export default RotationGizmo

