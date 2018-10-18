import React from 'react'

class TargetCamera extends React.Component {
  constructor (props) {
    super(props)
    const { cameraDirection, cameraRotation, rotation, rotationQuaternion, speed, noRotationConstraint, lockedTarget } = props
    this.TargetCamera = new TargetCamera(cameraDirection, cameraRotation, rotation, rotationQuaternion, speed, noRotationConstraint, lockedTarget)
  }

  render () {
    return null
  }
}

export default TargetCamera

