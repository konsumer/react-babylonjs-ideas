import React from 'react'
import BABYLON from 'babylonjs'

class AxisScaleGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { dragBehavior, snapDistance, onSnapObservable, uniformScaling, dragAxis, color, gizmoLayer } = props
    this.AxisScaleGizmo = new BABYLON.AxisScaleGizmo(dragAxis, color, gizmoLayer)
    this.AxisScaleGizmo.dragBehavior = dragBehavior
    this.AxisScaleGizmo.snapDistance = snapDistance
    this.AxisScaleGizmo.onSnapObservable = onSnapObservable
    this.AxisScaleGizmo.uniformScaling = uniformScaling
  }

  render () {
    return null
  }
}

export default AxisScaleGizmo

