import React from 'react'
import BABYLON from 'babylonjs'

class BoundingBoxGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { ignoreChildren, includeChildPredicate, rotationSphereSize, scaleBoxSize, fixedDragMeshScreenSize, fixedDragMeshScreenSizeDistanceFactor, onDragStartObservable, onScaleBoxDragObservable, onScaleBoxDragEndObservable, onRotationSphereDragObservable, onRotationSphereDragEndObservable, scalePivot, color, gizmoLayer } = props
    this.BoundingBoxGizmo = new BABYLON.BoundingBoxGizmo(color, gizmoLayer)
    this.BoundingBoxGizmo.ignoreChildren = ignoreChildren
    this.BoundingBoxGizmo.includeChildPredicate = includeChildPredicate
    this.BoundingBoxGizmo.rotationSphereSize = rotationSphereSize
    this.BoundingBoxGizmo.scaleBoxSize = scaleBoxSize
    this.BoundingBoxGizmo.fixedDragMeshScreenSize = fixedDragMeshScreenSize
    this.BoundingBoxGizmo.fixedDragMeshScreenSizeDistanceFactor = fixedDragMeshScreenSizeDistanceFactor
    this.BoundingBoxGizmo.onDragStartObservable = onDragStartObservable
    this.BoundingBoxGizmo.onScaleBoxDragObservable = onScaleBoxDragObservable
    this.BoundingBoxGizmo.onScaleBoxDragEndObservable = onScaleBoxDragEndObservable
    this.BoundingBoxGizmo.onRotationSphereDragObservable = onRotationSphereDragObservable
    this.BoundingBoxGizmo.onRotationSphereDragEndObservable = onRotationSphereDragEndObservable
    this.BoundingBoxGizmo.scalePivot = scalePivot
  }

  render () {
    return null
  }
}

export default BoundingBoxGizmo

