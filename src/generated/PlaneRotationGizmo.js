import React from 'react'
import BABYLON from 'babylonjs'

class PlaneRotationGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { dragBehavior, snapDistance, onSnapObservable, planeNormal, color, gizmoLayer, tessellation } = props
    this.PlaneRotationGizmo = new BABYLON.PlaneRotationGizmo(planeNormal, color, gizmoLayer, tessellation)
    this.PlaneRotationGizmo.dragBehavior = dragBehavior
    this.PlaneRotationGizmo.snapDistance = snapDistance
    this.PlaneRotationGizmo.onSnapObservable = onSnapObservable
  }

  render () {
    return null
  }
}

export default PlaneRotationGizmo

