import React from 'react'
import BABYLON from 'babylonjs'

class CameraInputsManager extends React.Component {
  constructor (props) {
    super(props)
    const { attached, attachedElement, noPreventDefault, camera, checkInputs, camera } = props
    this.CameraInputsManager = new BABYLON.CameraInputsManager(camera)
    this.CameraInputsManager.attached = attached
    this.CameraInputsManager.attachedElement = attachedElement
    this.CameraInputsManager.noPreventDefault = noPreventDefault
    this.CameraInputsManager.camera = camera
    this.CameraInputsManager.checkInputs = checkInputs
  }

  render () {
    return null
  }
}

export default CameraInputsManager

