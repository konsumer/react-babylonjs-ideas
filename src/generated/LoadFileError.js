import React from 'react'
import BABYLON from 'babylonjs'

class LoadFileError extends React.Component {
  constructor (props) {
    super(props)
    const { request, message, request } = props
    this.LoadFileError = new BABYLON.LoadFileError(message, request)
    this.LoadFileError.request = request
  }

  render () {
    return null
  }
}

export default LoadFileError

