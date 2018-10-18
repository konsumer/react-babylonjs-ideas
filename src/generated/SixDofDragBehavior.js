import React from 'react'
import BABYLON from 'babylonjs'

class SixDofDragBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { zDragFactor, dragging, dragDeltaRatio, currentDraggingPointerID, detachCameraControls, onDragStartObservable, onDragEndObservable, name } = props
    this.SixDofDragBehavior = new BABYLON.SixDofDragBehavior()
    this.SixDofDragBehavior.zDragFactor = zDragFactor
    this.SixDofDragBehavior.dragging = dragging
    this.SixDofDragBehavior.dragDeltaRatio = dragDeltaRatio
    this.SixDofDragBehavior.currentDraggingPointerID = currentDraggingPointerID
    this.SixDofDragBehavior.detachCameraControls = detachCameraControls
    this.SixDofDragBehavior.onDragStartObservable = onDragStartObservable
    this.SixDofDragBehavior.onDragEndObservable = onDragEndObservable
    this.SixDofDragBehavior.name = name
  }

  render () {
    return null
  }
}

export default SixDofDragBehavior

