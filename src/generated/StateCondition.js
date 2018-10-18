import React from 'react'
import BABYLON from 'babylonjs'

class StateCondition extends React.Component {
  constructor (props) {
    super(props)
    const { value, actionManager, target, value } = props
    this.StateCondition = new BABYLON.StateCondition(actionManager, target, value)
    this.StateCondition.value = value
  }

  render () {
    return null
  }
}

export default StateCondition

