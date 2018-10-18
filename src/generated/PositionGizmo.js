import React from 'react'
import BABYLON from 'babylonjs'

class PositionGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { xGizmo, yGizmo, zGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio, gizmoLayer } = props
    this.PositionGizmo = new BABYLON.PositionGizmo(gizmoLayer)
    this.PositionGizmo.xGizmo = xGizmo
    this.PositionGizmo.yGizmo = yGizmo
    this.PositionGizmo.zGizmo = zGizmo
    this.PositionGizmo.onDragStartObservable = onDragStartObservable
    this.PositionGizmo.onDragEndObservable = onDragEndObservable
    this.PositionGizmo.attachedMesh = attachedMesh
    this.PositionGizmo.updateGizmoRotationToMatchAttachedMesh = updateGizmoRotationToMatchAttachedMesh
    this.PositionGizmo.snapDistance = snapDistance
    this.PositionGizmo.scaleRatio = scaleRatio
  }

  render () {
    return null
  }
}

export default PositionGizmo

