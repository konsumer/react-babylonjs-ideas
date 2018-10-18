import React from 'react'
import BABYLON from 'babylonjs'

class Angle extends React.Component {
  constructor (props) {
    super(props)
    const { radians } = props
    this.Angle = new BABYLON.Angle(radians)
    
  }

  render () {
    return null
  }
}

export default Angle

