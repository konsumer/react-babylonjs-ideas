import React from 'react'

class PointerDragBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { maxDragAngle, currentDraggingPointerID, lastDragPosition, dragging, dragDeltaRatio, updateDragPlane, onDragObservable, onDragStartObservable, onDragEndObservable, moveAttached, enabled, detachCameraControls, useObjectOrienationForDragging, name } = props
    this.PointerDragBehavior = new PointerDragBehavior(maxDragAngle, currentDraggingPointerID, lastDragPosition, dragging, dragDeltaRatio, updateDragPlane, onDragObservable, onDragStartObservable, onDragEndObservable, moveAttached, enabled, detachCameraControls, useObjectOrienationForDragging, name)
  }

  render () {
    return null
  }
}

export default PointerDragBehavior

