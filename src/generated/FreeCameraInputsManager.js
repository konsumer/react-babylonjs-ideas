import React from 'react'
import BABYLON from 'babylonjs'

class FreeCameraInputsManager extends React.Component {
  constructor (props) {
    super(props)
    const { camera } = props
    this.FreeCameraInputsManager = new BABYLON.FreeCameraInputsManager(camera)
    
  }

  render () {
    return null
  }
}

export default FreeCameraInputsManager

