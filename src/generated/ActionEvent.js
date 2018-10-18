import React from 'react'

class ActionEvent extends React.Component {
  constructor (props) {
    super(props)
    const { source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData } = props
    this.ActionEvent = new ActionEvent(source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData)
  }

  render () {
    return null
  }
}

export default ActionEvent

