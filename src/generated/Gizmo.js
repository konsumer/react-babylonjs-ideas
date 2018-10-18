import React from 'react'

class Gizmo extends React.Component {
  constructor (props) {
    super(props)
    const { gizmoLayer, scaleRatio, attachedMesh, updateGizmoRotationToMatchAttachedMesh, updateGizmoPositionToMatchAttachedMesh } = props
    this.Gizmo = new Gizmo(gizmoLayer, scaleRatio, attachedMesh, updateGizmoRotationToMatchAttachedMesh, updateGizmoPositionToMatchAttachedMesh)
  }

  render () {
    return null
  }
}

export default Gizmo

