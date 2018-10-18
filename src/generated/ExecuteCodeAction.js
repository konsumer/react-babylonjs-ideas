import React from 'react'
import BABYLON from 'babylonjs'

class ExecuteCodeAction extends React.Component {
  constructor (props) {
    super(props)
    const { func, triggerOptions, func, condition } = props
    this.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(triggerOptions, func, condition)
    this.ExecuteCodeAction.func = func
  }

  render () {
    return null
  }
}

export default ExecuteCodeAction

