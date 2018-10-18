import React from 'react'
import BABYLON from 'babylonjs'

class AutoRotationBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { name, zoomStopsAnimation, idleRotationSpeed, idleRotationWaitTime, idleRotationSpinupTime, rotationInProgress } = props
    this.AutoRotationBehavior = new BABYLON.AutoRotationBehavior()
    this.AutoRotationBehavior.name = name
    this.AutoRotationBehavior.zoomStopsAnimation = zoomStopsAnimation
    this.AutoRotationBehavior.idleRotationSpeed = idleRotationSpeed
    this.AutoRotationBehavior.idleRotationWaitTime = idleRotationWaitTime
    this.AutoRotationBehavior.idleRotationSpinupTime = idleRotationSpinupTime
    this.AutoRotationBehavior.rotationInProgress = rotationInProgress
  }

  render () {
    return null
  }
}

export default AutoRotationBehavior

