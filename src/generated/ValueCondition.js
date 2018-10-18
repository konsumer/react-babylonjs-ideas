import React from 'react'
import BABYLON from 'babylonjs'

class ValueCondition extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value, operator, IsEqual, IsDifferent, IsGreater, IsLesser, actionManager, target, propertyPath, value, operator } = props
    this.ValueCondition = new BABYLON.ValueCondition(actionManager, target, propertyPath, value, operator)
    this.ValueCondition.propertyPath = propertyPath
    this.ValueCondition.value = value
    this.ValueCondition.operator = operator
    this.ValueCondition.IsEqual = IsEqual
    this.ValueCondition.IsDifferent = IsDifferent
    this.ValueCondition.IsGreater = IsGreater
    this.ValueCondition.IsLesser = IsLesser
  }

  render () {
    return null
  }
}

export default ValueCondition

