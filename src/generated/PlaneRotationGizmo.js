import React from 'react'

class PlaneRotationGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { dragBehavior, snapDistance, onSnapObservable } = props
    this.PlaneRotationGizmo = new PlaneRotationGizmo(dragBehavior, snapDistance, onSnapObservable)
  }

  render () {
    return null
  }
}

export default PlaneRotationGizmo

