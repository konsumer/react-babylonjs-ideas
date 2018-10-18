import React from 'react'

class BoundingBoxGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { ignoreChildren, includeChildPredicate, rotationSphereSize, scaleBoxSize, fixedDragMeshScreenSize, fixedDragMeshScreenSizeDistanceFactor, onDragStartObservable, onScaleBoxDragObservable, onScaleBoxDragEndObservable, onRotationSphereDragObservable, onRotationSphereDragEndObservable, scalePivot } = props
    this.BoundingBoxGizmo = new BoundingBoxGizmo(ignoreChildren, includeChildPredicate, rotationSphereSize, scaleBoxSize, fixedDragMeshScreenSize, fixedDragMeshScreenSizeDistanceFactor, onDragStartObservable, onScaleBoxDragObservable, onScaleBoxDragEndObservable, onRotationSphereDragObservable, onRotationSphereDragEndObservable, scalePivot)
  }

  render () {
    return null
  }
}

export default BoundingBoxGizmo

