import React from 'react'
import BABYLON from 'babylonjs'

class PointerDragBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { maxDragAngle, currentDraggingPointerID, lastDragPosition, dragging, dragDeltaRatio, updateDragPlane, onDragObservable, onDragStartObservable, onDragEndObservable, moveAttached, enabled, detachCameraControls, useObjectOrienationForDragging, name, options } = props
    this.PointerDragBehavior = new BABYLON.PointerDragBehavior(options)
    this.PointerDragBehavior.maxDragAngle = maxDragAngle
    this.PointerDragBehavior.currentDraggingPointerID = currentDraggingPointerID
    this.PointerDragBehavior.lastDragPosition = lastDragPosition
    this.PointerDragBehavior.dragging = dragging
    this.PointerDragBehavior.dragDeltaRatio = dragDeltaRatio
    this.PointerDragBehavior.updateDragPlane = updateDragPlane
    this.PointerDragBehavior.onDragObservable = onDragObservable
    this.PointerDragBehavior.onDragStartObservable = onDragStartObservable
    this.PointerDragBehavior.onDragEndObservable = onDragEndObservable
    this.PointerDragBehavior.moveAttached = moveAttached
    this.PointerDragBehavior.enabled = enabled
    this.PointerDragBehavior.detachCameraControls = detachCameraControls
    this.PointerDragBehavior.useObjectOrienationForDragging = useObjectOrienationForDragging
    this.PointerDragBehavior.name = name
  }

  render () {
    return null
  }
}

export default PointerDragBehavior

