import React from 'react'

class ScaleGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { xGizmo, yGizmo, zGizmo, uniformScaleGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio } = props
    this.ScaleGizmo = new ScaleGizmo(xGizmo, yGizmo, zGizmo, uniformScaleGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio)
  }

  render () {
    return null
  }
}

export default ScaleGizmo

