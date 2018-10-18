import React from 'react'

class WindowsMotionController extends React.Component {
  constructor (props) {
    super(props)
    const { onTrackpadChangedObservable, onTrackpadValuesChangedObservable, trackpad, onTriggerButtonStateChangedObservable, onMenuButtonStateChangedObservable, onGripButtonStateChangedObservable, onThumbstickButtonStateChangedObservable, onTouchpadButtonStateChangedObservable, onTouchpadValuesChangedObservable, processModel, createMeshInfo } = props
    this.WindowsMotionController = new WindowsMotionController(onTrackpadChangedObservable, onTrackpadValuesChangedObservable, trackpad, onTriggerButtonStateChangedObservable, onMenuButtonStateChangedObservable, onGripButtonStateChangedObservable, onThumbstickButtonStateChangedObservable, onTouchpadButtonStateChangedObservable, onTouchpadValuesChangedObservable, processModel, createMeshInfo)
  }

  render () {
    return null
  }
}

export default WindowsMotionController

