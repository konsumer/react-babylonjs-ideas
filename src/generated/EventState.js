import React from 'react'
import BABYLON from 'babylonjs'

class EventState extends React.Component {
  constructor (props) {
    super(props)
    const { skipNextObservers, mask, target, currentTarget, lastReturnValue, mask, skipNextObservers, target, currentTarget } = props
    this.EventState = new BABYLON.EventState(mask, skipNextObservers, target, currentTarget)
    this.EventState.skipNextObservers = skipNextObservers
    this.EventState.mask = mask
    this.EventState.target = target
    this.EventState.currentTarget = currentTarget
    this.EventState.lastReturnValue = lastReturnValue
  }

  render () {
    return null
  }
}

export default EventState

