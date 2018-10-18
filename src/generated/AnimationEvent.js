import React from 'react'
import BABYLON from 'babylonjs'

class AnimationEvent extends React.Component {
  constructor (props) {
    super(props)
    const { frame, action, onlyOnce, isDone, frame, action, onlyOnce } = props
    this.AnimationEvent = new BABYLON.AnimationEvent(frame, action, onlyOnce)
    this.AnimationEvent.frame = frame
    this.AnimationEvent.action = action
    this.AnimationEvent.onlyOnce = onlyOnce
    this.AnimationEvent.isDone = isDone
  }

  render () {
    return null
  }
}

export default AnimationEvent

