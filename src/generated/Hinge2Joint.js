import React from 'react'
import BABYLON from 'babylonjs'

class Hinge2Joint extends React.Component {
  constructor (props) {
    super(props)
    const { jointData } = props
    this.Hinge2Joint = new BABYLON.Hinge2Joint(jointData)
    
  }

  render () {
    return null
  }
}

export default Hinge2Joint

