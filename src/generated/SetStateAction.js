import React from 'react'
import BABYLON from 'babylonjs'

class SetStateAction extends React.Component {
  constructor (props) {
    super(props)
    const { value, triggerOptions, target, value, condition } = props
    this.SetStateAction = new BABYLON.SetStateAction(triggerOptions, target, value, condition)
    this.SetStateAction.value = value
  }

  render () {
    return null
  }
}

export default SetStateAction

