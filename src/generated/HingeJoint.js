import React from 'react'
import BABYLON from 'babylonjs'

class HingeJoint extends React.Component {
  constructor (props) {
    super(props)
    const { jointData } = props
    this.HingeJoint = new BABYLON.HingeJoint(jointData)
    
  }

  render () {
    return null
  }
}

export default HingeJoint

