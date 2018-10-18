import React from 'react'

class AutoRotationBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { name, zoomStopsAnimation, idleRotationSpeed, idleRotationWaitTime, idleRotationSpinupTime, rotationInProgress } = props
    this.AutoRotationBehavior = new AutoRotationBehavior(name, zoomStopsAnimation, idleRotationSpeed, idleRotationWaitTime, idleRotationSpinupTime, rotationInProgress)
  }

  render () {
    return null
  }
}

export default AutoRotationBehavior

