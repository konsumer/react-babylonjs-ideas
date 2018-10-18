import React from 'react'
import BABYLON from 'babylonjs'

class CombineAction extends React.Component {
  constructor (props) {
    super(props)
    const { children, triggerOptions, children, condition } = props
    this.CombineAction = new BABYLON.CombineAction(triggerOptions, children, condition)
    this.CombineAction.children = children
  }

  render () {
    return null
  }
}

export default CombineAction

