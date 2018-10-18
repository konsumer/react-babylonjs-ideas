import React from 'react'
import BABYLON from 'babylonjs'

class SetParentAction extends React.Component {
  constructor (props) {
    super(props)
    const { triggerOptions, target, parent, condition } = props
    this.SetParentAction = new BABYLON.SetParentAction(triggerOptions, target, parent, condition)
    
  }

  render () {
    return null
  }
}

export default SetParentAction

