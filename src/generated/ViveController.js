import React from 'react'
import BABYLON from 'babylonjs'

class ViveController extends React.Component {
  constructor (props) {
    super(props)
    const { MODEL_BASE_URL, MODEL_FILENAME, onLeftButtonStateChangedObservable, onRightButtonStateChangedObservable, onMenuButtonStateChangedObservable, vrGamepad } = props
    this.ViveController = new BABYLON.ViveController(vrGamepad)
    this.ViveController.MODEL_BASE_URL = MODEL_BASE_URL
    this.ViveController.MODEL_FILENAME = MODEL_FILENAME
    this.ViveController.onLeftButtonStateChangedObservable = onLeftButtonStateChangedObservable
    this.ViveController.onRightButtonStateChangedObservable = onRightButtonStateChangedObservable
    this.ViveController.onMenuButtonStateChangedObservable = onMenuButtonStateChangedObservable
  }

  render () {
    return null
  }
}

export default ViveController

