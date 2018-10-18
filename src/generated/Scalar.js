import React from 'react'
import BABYLON from 'babylonjs'

class Scalar extends React.Component {
  constructor (props) {
    super(props)
    const { TwoPi } = props
    this.Scalar = new BABYLON.Scalar()
    this.Scalar.TwoPi = TwoPi
  }

  render () {
    return null
  }
}

export default Scalar

