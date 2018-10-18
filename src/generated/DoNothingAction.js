import React from 'react'
import BABYLON from 'babylonjs'

class DoNothingAction extends React.Component {
  constructor (props) {
    super(props)
    const { triggerOptions, condition } = props
    this.DoNothingAction = new BABYLON.DoNothingAction(triggerOptions, condition)
    
  }

  render () {
    return null
  }
}

export default DoNothingAction

