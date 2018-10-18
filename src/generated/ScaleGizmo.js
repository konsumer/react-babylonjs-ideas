import React from 'react'
import BABYLON from 'babylonjs'

class ScaleGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { xGizmo, yGizmo, zGizmo, uniformScaleGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio, gizmoLayer } = props
    this.ScaleGizmo = new BABYLON.ScaleGizmo(gizmoLayer)
    this.ScaleGizmo.xGizmo = xGizmo
    this.ScaleGizmo.yGizmo = yGizmo
    this.ScaleGizmo.zGizmo = zGizmo
    this.ScaleGizmo.uniformScaleGizmo = uniformScaleGizmo
    this.ScaleGizmo.onDragStartObservable = onDragStartObservable
    this.ScaleGizmo.onDragEndObservable = onDragEndObservable
    this.ScaleGizmo.attachedMesh = attachedMesh
    this.ScaleGizmo.updateGizmoRotationToMatchAttachedMesh = updateGizmoRotationToMatchAttachedMesh
    this.ScaleGizmo.snapDistance = snapDistance
    this.ScaleGizmo.scaleRatio = scaleRatio
  }

  render () {
    return null
  }
}

export default ScaleGizmo

