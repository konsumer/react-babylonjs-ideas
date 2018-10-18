import React from 'react'

class AnimationEvent extends React.Component {
  constructor (props) {
    super(props)
    const { frame, action, onlyOnce, isDone } = props
    this.AnimationEvent = new AnimationEvent(frame, action, onlyOnce, isDone)
  }

  render () {
    return null
  }
}

export default AnimationEvent

