import React from 'react'
import BABYLON from 'babylonjs'

class FreeCameraTouchInput extends React.Component {
  constructor (props) {
    super(props)
    const { camera, touchAngularSensibility, touchMoveSensibility } = props
    this.FreeCameraTouchInput = new BABYLON.FreeCameraTouchInput()
    this.FreeCameraTouchInput.camera = camera
    this.FreeCameraTouchInput.touchAngularSensibility = touchAngularSensibility
    this.FreeCameraTouchInput.touchMoveSensibility = touchMoveSensibility
  }

  render () {
    return null
  }
}

export default FreeCameraTouchInput

