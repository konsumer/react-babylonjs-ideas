import React from 'react'
import BABYLON from 'babylonjs'

class WindowsMotionController extends React.Component {
  constructor (props) {
    super(props)
    const { MODEL_BASE_URL, MODEL_LEFT_FILENAME, MODEL_RIGHT_FILENAME, GAMEPAD_ID_PREFIX, GAMEPAD_ID_PATTERN, onTrackpadChangedObservable, onTrackpadValuesChangedObservable, trackpad, onTriggerButtonStateChangedObservable, onMenuButtonStateChangedObservable, onGripButtonStateChangedObservable, onThumbstickButtonStateChangedObservable, onTouchpadButtonStateChangedObservable, onTouchpadValuesChangedObservable, processModel, createMeshInfo, vrGamepad } = props
    this.WindowsMotionController = new BABYLON.WindowsMotionController(vrGamepad)
    this.WindowsMotionController.MODEL_BASE_URL = MODEL_BASE_URL
    this.WindowsMotionController.MODEL_LEFT_FILENAME = MODEL_LEFT_FILENAME
    this.WindowsMotionController.MODEL_RIGHT_FILENAME = MODEL_RIGHT_FILENAME
    this.WindowsMotionController.GAMEPAD_ID_PREFIX = GAMEPAD_ID_PREFIX
    this.WindowsMotionController.GAMEPAD_ID_PATTERN = GAMEPAD_ID_PATTERN
    this.WindowsMotionController.onTrackpadChangedObservable = onTrackpadChangedObservable
    this.WindowsMotionController.onTrackpadValuesChangedObservable = onTrackpadValuesChangedObservable
    this.WindowsMotionController.trackpad = trackpad
    this.WindowsMotionController.onTriggerButtonStateChangedObservable = onTriggerButtonStateChangedObservable
    this.WindowsMotionController.onMenuButtonStateChangedObservable = onMenuButtonStateChangedObservable
    this.WindowsMotionController.onGripButtonStateChangedObservable = onGripButtonStateChangedObservable
    this.WindowsMotionController.onThumbstickButtonStateChangedObservable = onThumbstickButtonStateChangedObservable
    this.WindowsMotionController.onTouchpadButtonStateChangedObservable = onTouchpadButtonStateChangedObservable
    this.WindowsMotionController.onTouchpadValuesChangedObservable = onTouchpadValuesChangedObservable
    this.WindowsMotionController.processModel = processModel
    this.WindowsMotionController.createMeshInfo = createMeshInfo
  }

  render () {
    return null
  }
}

export default WindowsMotionController

