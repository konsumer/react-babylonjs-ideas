import React from 'react'

class ActionManager extends React.Component {
  constructor (props) {
    super(props)
    const { actions, hoverCursor, hasPointerTriggers, hasPickTriggers } = props
    this.ActionManager = new ActionManager(actions, hoverCursor, hasPointerTriggers, hasPickTriggers)
  }

  render () {
    return null
  }
}

export default ActionManager

