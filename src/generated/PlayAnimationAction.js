import React from 'react'
import BABYLON from 'babylonjs'

class PlayAnimationAction extends React.Component {
  constructor (props) {
    super(props)
    const { from, to, loop, triggerOptions, target, from, to, loop, condition } = props
    this.PlayAnimationAction = new BABYLON.PlayAnimationAction(triggerOptions, target, from, to, loop, condition)
    this.PlayAnimationAction.from = from
    this.PlayAnimationAction.to = to
    this.PlayAnimationAction.loop = loop
  }

  render () {
    return null
  }
}

export default PlayAnimationAction

