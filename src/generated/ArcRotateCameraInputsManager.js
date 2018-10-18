import React from 'react'
import BABYLON from 'babylonjs'

class ArcRotateCameraInputsManager extends React.Component {
  constructor (props) {
    super(props)
    const { camera } = props
    this.ArcRotateCameraInputsManager = new BABYLON.ArcRotateCameraInputsManager(camera)
    
  }

  render () {
    return null
  }
}

export default ArcRotateCameraInputsManager

