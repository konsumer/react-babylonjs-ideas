import React from 'react'

class AxisDragGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { dragBehavior, snapDistance, onSnapObservable } = props
    this.AxisDragGizmo = new AxisDragGizmo(dragBehavior, snapDistance, onSnapObservable)
  }

  render () {
    return null
  }
}

export default AxisDragGizmo

