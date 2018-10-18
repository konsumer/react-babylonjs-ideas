import React from 'react'
import BABYLON from 'babylonjs'

class Action extends React.Component {
  constructor (props) {
    super(props)
    const { triggerOptions, trigger, onBeforeExecuteObservable, triggerOptions, condition } = props
    this.Action = new BABYLON.Action(triggerOptions, condition)
    this.Action.triggerOptions = triggerOptions
    this.Action.trigger = trigger
    this.Action.onBeforeExecuteObservable = onBeforeExecuteObservable
  }

  render () {
    return null
  }
}

export default Action

