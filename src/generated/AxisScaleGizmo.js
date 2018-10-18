import React from 'react'

class AxisScaleGizmo extends React.Component {
  constructor (props) {
    super(props)
    const { dragBehavior, snapDistance, onSnapObservable, uniformScaling } = props
    this.AxisScaleGizmo = new AxisScaleGizmo(dragBehavior, snapDistance, onSnapObservable, uniformScaling)
  }

  render () {
    return null
  }
}

export default AxisScaleGizmo

