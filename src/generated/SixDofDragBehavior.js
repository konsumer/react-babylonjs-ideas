import React from 'react'

class SixDofDragBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { zDragFactor, dragging, dragDeltaRatio, currentDraggingPointerID, detachCameraControls, onDragStartObservable, onDragEndObservable, name } = props
    this.SixDofDragBehavior = new SixDofDragBehavior(zDragFactor, dragging, dragDeltaRatio, currentDraggingPointerID, detachCameraControls, onDragStartObservable, onDragEndObservable, name)
  }

  render () {
    return null
  }
}

export default SixDofDragBehavior

