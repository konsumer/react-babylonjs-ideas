import React from 'react'
import BABYLON from 'babylonjs'

class OculusTouchController extends React.Component {
  constructor (props) {
    super(props)
    const { MODEL_BASE_URL, MODEL_LEFT_FILENAME, MODEL_RIGHT_FILENAME, onSecondaryTriggerStateChangedObservable, onThumbRestChangedObservable, onAButtonStateChangedObservable, onBButtonStateChangedObservable, onXButtonStateChangedObservable, onYButtonStateChangedObservable, vrGamepad } = props
    this.OculusTouchController = new BABYLON.OculusTouchController(vrGamepad)
    this.OculusTouchController.MODEL_BASE_URL = MODEL_BASE_URL
    this.OculusTouchController.MODEL_LEFT_FILENAME = MODEL_LEFT_FILENAME
    this.OculusTouchController.MODEL_RIGHT_FILENAME = MODEL_RIGHT_FILENAME
    this.OculusTouchController.onSecondaryTriggerStateChangedObservable = onSecondaryTriggerStateChangedObservable
    this.OculusTouchController.onThumbRestChangedObservable = onThumbRestChangedObservable
    this.OculusTouchController.onAButtonStateChangedObservable = onAButtonStateChangedObservable
    this.OculusTouchController.onBButtonStateChangedObservable = onBButtonStateChangedObservable
    this.OculusTouchController.onXButtonStateChangedObservable = onXButtonStateChangedObservable
    this.OculusTouchController.onYButtonStateChangedObservable = onYButtonStateChangedObservable
  }

  render () {
    return null
  }
}

export default OculusTouchController

