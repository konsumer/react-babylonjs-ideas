import React from 'react'
import BABYLON from 'babylonjs'

class Gizmo extends React.Component {
  constructor (props) {
    super(props)
    const { gizmoLayer, scaleRatio, attachedMesh, updateGizmoRotationToMatchAttachedMesh, updateGizmoPositionToMatchAttachedMesh, gizmoLayer } = props
    this.Gizmo = new BABYLON.Gizmo(gizmoLayer)
    this.Gizmo.gizmoLayer = gizmoLayer
    this.Gizmo.scaleRatio = scaleRatio
    this.Gizmo.attachedMesh = attachedMesh
    this.Gizmo.updateGizmoRotationToMatchAttachedMesh = updateGizmoRotationToMatchAttachedMesh
    this.Gizmo.updateGizmoPositionToMatchAttachedMesh = updateGizmoPositionToMatchAttachedMesh
  }

  render () {
    return null
  }
}

export default Gizmo

