import React from 'react'
import BABYLON from 'babylonjs'

class AxisDragGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { dragBehavior, snapDistance, onSnapObservable, dragAxis, color, gizmoLayer } = props
    this.AxisDragGizmo = new BABYLON.AxisDragGizmo(dragAxis, color, gizmoLayer)
    this.AxisDragGizmo.dragBehavior = dragBehavior
    this.AxisDragGizmo.snapDistance = snapDistance
    this.AxisDragGizmo.onSnapObservable = onSnapObservable
  }

  render () {
    return null
  }
}

export default AxisDragGizmo

