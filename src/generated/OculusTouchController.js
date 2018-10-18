import React from 'react'

class OculusTouchController extends React.Component {
  constructor (props) {
    super(props)
    const { onSecondaryTriggerStateChangedObservable, onThumbRestChangedObservable, onAButtonStateChangedObservable, onBButtonStateChangedObservable, onXButtonStateChangedObservable, onYButtonStateChangedObservable } = props
    this.OculusTouchController = new OculusTouchController(onSecondaryTriggerStateChangedObservable, onThumbRestChangedObservable, onAButtonStateChangedObservable, onBButtonStateChangedObservable, onXButtonStateChangedObservable, onYButtonStateChangedObservable)
  }

  render () {
    return null
  }
}

export default OculusTouchController

