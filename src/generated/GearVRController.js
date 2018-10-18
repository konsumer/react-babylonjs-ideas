import React from 'react'
import BABYLON from 'babylonjs'

class GearVRController extends React.Component {
  constructor (props) {
    super(props)
    const { MODEL_BASE_URL, MODEL_FILENAME, GAMEPAD_ID_PREFIX, vrGamepad } = props
    this.GearVRController = new BABYLON.GearVRController(vrGamepad)
    this.GearVRController.MODEL_BASE_URL = MODEL_BASE_URL
    this.GearVRController.MODEL_FILENAME = MODEL_FILENAME
    this.GearVRController.GAMEPAD_ID_PREFIX = GAMEPAD_ID_PREFIX
  }

  render () {
    return null
  }
}

export default GearVRController

