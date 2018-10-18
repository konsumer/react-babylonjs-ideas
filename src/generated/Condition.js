import React from 'react'
import BABYLON from 'babylonjs'

class Condition extends React.Component {
  constructor (props) {
    super(props)
    const { actionManager } = props
    this.Condition = new BABYLON.Condition(actionManager)
    
  }

  render () {
    return null
  }
}

export default Condition

