import React from 'react'
import { withScene } from './Scene'

class GizmoManager extends React.Component {
  constructor (props) {
    super(props)
    const { scene, gizmos, boundingBoxDragBehavior, attachableMeshes, usePointerToAttachGizmos, positionGizmoEnabled, rotationGizmoEnabled, scaleGizmoEnabled, boundingBoxGizmoEnabled } = props
    this.GizmoManager = new GizmoManager(scene, gizmos, boundingBoxDragBehavior, attachableMeshes, usePointerToAttachGizmos, positionGizmoEnabled, rotationGizmoEnabled, scaleGizmoEnabled, boundingBoxGizmoEnabled)
  }

  render () {
    return null
  }
}

export default withScene(GizmoManager)

