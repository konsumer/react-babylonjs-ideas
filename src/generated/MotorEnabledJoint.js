import React from 'react'
import BABYLON from 'babylonjs'

class MotorEnabledJoint extends React.Component {
  constructor (props) {
    super(props)
    const { type, jointData } = props
    this.MotorEnabledJoint = new BABYLON.MotorEnabledJoint(type, jointData)
    
  }

  render () {
    return null
  }
}

export default MotorEnabledJoint

