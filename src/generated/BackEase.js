import React from 'react'
import BABYLON from 'babylonjs'

class BackEase extends React.Component {
  constructor (props) {
    super(props)
    const { amplitude, amplitude } = props
    this.BackEase = new BABYLON.BackEase(amplitude)
    this.BackEase.amplitude = amplitude
  }

  render () {
    return null
  }
}

export default BackEase

