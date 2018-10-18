import React from 'react'
import BABYLON from 'babylonjs'

class BinaryFileAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, data, onSuccess, onError, name, url } = props
    this.BinaryFileAssetTask = new BABYLON.BinaryFileAssetTask(name, url)
    this.BinaryFileAssetTask.name = name
    this.BinaryFileAssetTask.url = url
    this.BinaryFileAssetTask.data = data
    this.BinaryFileAssetTask.onSuccess = onSuccess
    this.BinaryFileAssetTask.onError = onError
  }

  render () {
    return null
  }
}

export default BinaryFileAssetTask

