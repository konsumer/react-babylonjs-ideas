import React from 'react'

class ArcRotateCameraKeyboardMoveInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, keysUp, keysDown, keysLeft, keysRight, keysReset, panningSensibility, zoomingSensibility, useAltToZoom, angularSpeed } = props
    this.ArcRotateCameraKeyboardMoveInput = new ArcRotateCameraKeyboardMoveInput(camera, keysUp, keysDown, keysLeft, keysRight, keysReset, panningSensibility, zoomingSensibility, useAltToZoom, angularSpeed)
  }

  render () {
    return null
  }
}

export default ArcRotateCameraKeyboardMoveInput

