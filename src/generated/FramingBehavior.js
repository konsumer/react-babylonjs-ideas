import React from 'react'

class FramingBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { name, mode, radiusScale, positionScale, defaultElevation, elevationReturnTime, elevationReturnWaitTime, zoomStopsAnimation, framingTime, autoCorrectCameraLimitsAndSensibility, isUserIsMoving } = props
    this.FramingBehavior = new FramingBehavior(name, mode, radiusScale, positionScale, defaultElevation, elevationReturnTime, elevationReturnWaitTime, zoomStopsAnimation, framingTime, autoCorrectCameraLimitsAndSensibility, isUserIsMoving)
  }

  render () {
    return null
  }
}

export default FramingBehavior

