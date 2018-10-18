import React from 'react'
import BABYLON from 'babylonjs'

class WebVRController extends React.Component {
  constructor (props) {
    super(props)
    const { onTriggerStateChangedObservable, onMainButtonStateChangedObservable, onSecondaryButtonStateChangedObservable, onPadStateChangedObservable, onPadValuesChangedObservable, pad, hand, defaultModel, vrGamepad } = props
    this.WebVRController = new BABYLON.WebVRController(vrGamepad)
    this.WebVRController.onTriggerStateChangedObservable = onTriggerStateChangedObservable
    this.WebVRController.onMainButtonStateChangedObservable = onMainButtonStateChangedObservable
    this.WebVRController.onSecondaryButtonStateChangedObservable = onSecondaryButtonStateChangedObservable
    this.WebVRController.onPadStateChangedObservable = onPadStateChangedObservable
    this.WebVRController.onPadValuesChangedObservable = onPadValuesChangedObservable
    this.WebVRController.pad = pad
    this.WebVRController.hand = hand
    this.WebVRController.defaultModel = defaultModel
  }

  render () {
    return null
  }
}

export default WebVRController

