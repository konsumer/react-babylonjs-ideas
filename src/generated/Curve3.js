import React from 'react'
import BABYLON from 'babylonjs'

class Curve3 extends React.Component {
  constructor (props) {
    super(props)
    const { points } = props
    this.Curve3 = new BABYLON.Curve3(points)
    
  }

  render () {
    return null
  }
}

export default Curve3

