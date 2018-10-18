import React from 'react'

class PositionGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { xGizmo, yGizmo, zGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio } = props
    this.PositionGizmo = new PositionGizmo(xGizmo, yGizmo, zGizmo, onDragStartObservable, onDragEndObservable, attachedMesh, updateGizmoRotationToMatchAttachedMesh, snapDistance, scaleRatio)
  }

  render () {
    return null
  }
}

export default PositionGizmo

