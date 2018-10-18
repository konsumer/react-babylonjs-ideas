import React from 'react'
import BABYLON from 'babylonjs'

class GenericController extends React.Component {
  constructor (props) {
    super(props)
    const { MODEL_BASE_URL, MODEL_FILENAME, vrGamepad } = props
    this.GenericController = new BABYLON.GenericController(vrGamepad)
    this.GenericController.MODEL_BASE_URL = MODEL_BASE_URL
    this.GenericController.MODEL_FILENAME = MODEL_FILENAME
  }

  render () {
    return null
  }
}

export default GenericController

