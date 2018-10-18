import React from 'react'

class EventState extends React.Component {
  constructor (props) {
    super(props)
    const { skipNextObservers, mask, target, currentTarget, lastReturnValue } = props
    this.EventState = new EventState(skipNextObservers, mask, target, currentTarget, lastReturnValue)
  }

  render () {
    return null
  }
}

export default EventState

