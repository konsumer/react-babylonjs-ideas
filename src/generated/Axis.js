import React from 'react'
import BABYLON from 'babylonjs'

class Axis extends React.Component {
  constructor (props) {
    super(props)
    const { X, Y, Z } = props
    this.Axis = new BABYLON.Axis()
    this.Axis.X = X
    this.Axis.Y = Y
    this.Axis.Z = Z
  }

  render () {
    return null
  }
}

export default Axis

