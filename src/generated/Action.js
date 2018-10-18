import React from 'react'

class Action extends React.Component {
  constructor (props) {
    super(props)
    const { triggerOptions, trigger, onBeforeExecuteObservable } = props
    this.Action = new Action(triggerOptions, trigger, onBeforeExecuteObservable)
  }

  render () {
    return null
  }
}

export default Action

