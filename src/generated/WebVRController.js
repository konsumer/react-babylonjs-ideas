import React from 'react'

class WebVRController extends React.Component {
  constructor (props) {
    super(props)
    const { onTriggerStateChangedObservable, onMainButtonStateChangedObservable, onSecondaryButtonStateChangedObservable, onPadStateChangedObservable, onPadValuesChangedObservable, pad, hand, defaultModel } = props
    this.WebVRController = new WebVRController(onTriggerStateChangedObservable, onMainButtonStateChangedObservable, onSecondaryButtonStateChangedObservable, onPadStateChangedObservable, onPadValuesChangedObservable, pad, hand, defaultModel)
  }

  render () {
    return null
  }
}

export default WebVRController

