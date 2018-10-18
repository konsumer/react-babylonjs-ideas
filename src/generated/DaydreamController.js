import React from 'react'
import BABYLON from 'babylonjs'

class DaydreamController extends React.Component {
  constructor (props) {
    super(props)
    const { MODEL_BASE_URL, MODEL_FILENAME, GAMEPAD_ID_PREFIX, vrGamepad } = props
    this.DaydreamController = new BABYLON.DaydreamController(vrGamepad)
    this.DaydreamController.MODEL_BASE_URL = MODEL_BASE_URL
    this.DaydreamController.MODEL_FILENAME = MODEL_FILENAME
    this.DaydreamController.GAMEPAD_ID_PREFIX = GAMEPAD_ID_PREFIX
  }

  render () {
    return null
  }
}

export default DaydreamController

