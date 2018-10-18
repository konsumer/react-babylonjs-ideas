import React from 'react'
import BABYLON from 'babylonjs'

class ImageAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, image, onSuccess, onError, name, url } = props
    this.ImageAssetTask = new BABYLON.ImageAssetTask(name, url)
    this.ImageAssetTask.name = name
    this.ImageAssetTask.url = url
    this.ImageAssetTask.image = image
    this.ImageAssetTask.onSuccess = onSuccess
    this.ImageAssetTask.onError = onError
  }

  render () {
    return null
  }
}

export default ImageAssetTask

