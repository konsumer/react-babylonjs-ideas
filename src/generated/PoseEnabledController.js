import React from 'react'

class PoseEnabledController extends React.Component {
  constructor (props) {
    super(props)
    const { devicePosition, deviceRotationQuaternion, deviceScaleFactor, position, rotationQuaternion, controllerType, rawPose, mesh } = props
    this.PoseEnabledController = new PoseEnabledController(devicePosition, deviceRotationQuaternion, deviceScaleFactor, position, rotationQuaternion, controllerType, rawPose, mesh)
  }

  render () {
    return null
  }
}

export default PoseEnabledController

