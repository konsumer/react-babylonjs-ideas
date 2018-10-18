import React from 'react'
import BABYLON from 'babylonjs'

class DistanceJoint extends React.Component {
  constructor (props) {
    super(props)
    const { jointData } = props
    this.DistanceJoint = new BABYLON.DistanceJoint(jointData)
    
  }

  render () {
    return null
  }
}

export default DistanceJoint

