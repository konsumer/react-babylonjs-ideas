import React from 'react'

class RotationGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { xGizmo, yGizmo, zGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio } = props
    this.RotationGizmo = new RotationGizmo(xGizmo, yGizmo, zGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio)
  }

  render () {
    return null
  }
}

export default RotationGizmo

