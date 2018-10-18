import React from 'react'
import BABYLON from 'babylonjs'

class TextFileAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, text, onSuccess, onError, name, url } = props
    this.TextFileAssetTask = new BABYLON.TextFileAssetTask(name, url)
    this.TextFileAssetTask.name = name
    this.TextFileAssetTask.url = url
    this.TextFileAssetTask.text = text
    this.TextFileAssetTask.onSuccess = onSuccess
    this.TextFileAssetTask.onError = onError
  }

  render () {
    return null
  }
}

export default TextFileAssetTask

