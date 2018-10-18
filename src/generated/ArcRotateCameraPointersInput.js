import React from 'react'

class ArcRotateCameraPointersInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, buttons, angularSensibilityX, angularSensibilityY, pinchPrecision, pinchDeltaPercentage, panningSensibility, multiTouchPanning, multiTouchPanAndZoom, pinchInwards } = props
    this.ArcRotateCameraPointersInput = new ArcRotateCameraPointersInput(camera, buttons, angularSensibilityX, angularSensibilityY, pinchPrecision, pinchDeltaPercentage, panningSensibility, multiTouchPanning, multiTouchPanAndZoom, pinchInwards)
  }

  render () {
    return null
  }
}

export default ArcRotateCameraPointersInput

