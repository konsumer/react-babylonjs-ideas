import React from 'react'
import BABYLON from 'babylonjs'

class SwitchBooleanAction extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, triggerOptions, target, propertyPath, condition } = props
    this.SwitchBooleanAction = new BABYLON.SwitchBooleanAction(triggerOptions, target, propertyPath, condition)
    this.SwitchBooleanAction.propertyPath = propertyPath
  }

  render () {
    return null
  }
}

export default SwitchBooleanAction

