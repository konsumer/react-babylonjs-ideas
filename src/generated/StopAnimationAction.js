import React from 'react'
import BABYLON from 'babylonjs'

class StopAnimationAction extends React.Component {
  constructor (props) {
    super(props)
    const { triggerOptions, target, condition } = props
    this.StopAnimationAction = new BABYLON.StopAnimationAction(triggerOptions, target, condition)
    
  }

  render () {
    return null
  }
}

export default StopAnimationAction

