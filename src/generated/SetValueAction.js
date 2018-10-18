import React from 'react'
import BABYLON from 'babylonjs'

class SetValueAction extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value, triggerOptions, target, propertyPath, value, condition } = props
    this.SetValueAction = new BABYLON.SetValueAction(triggerOptions, target, propertyPath, value, condition)
    this.SetValueAction.propertyPath = propertyPath
    this.SetValueAction.value = value
  }

  render () {
    return null
  }
}

export default SetValueAction

