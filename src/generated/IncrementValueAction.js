import React from 'react'
import BABYLON from 'babylonjs'

class IncrementValueAction extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value, triggerOptions, target, propertyPath, value, condition } = props
    this.IncrementValueAction = new BABYLON.IncrementValueAction(triggerOptions, target, propertyPath, value, condition)
    this.IncrementValueAction.propertyPath = propertyPath
    this.IncrementValueAction.value = value
  }

  render () {
    return null
  }
}

export default IncrementValueAction

