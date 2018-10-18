import React from 'react'
import BABYLON from 'babylonjs'

class TextureAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, noMipmap, invertY, samplingMode, texture, onSuccess, onError, name, url, noMipmap, invertY, samplingMode } = props
    this.TextureAssetTask = new BABYLON.TextureAssetTask(name, url, noMipmap, invertY, samplingMode)
    this.TextureAssetTask.name = name
    this.TextureAssetTask.url = url
    this.TextureAssetTask.noMipmap = noMipmap
    this.TextureAssetTask.invertY = invertY
    this.TextureAssetTask.samplingMode = samplingMode
    this.TextureAssetTask.texture = texture
    this.TextureAssetTask.onSuccess = onSuccess
    this.TextureAssetTask.onError = onError
  }

  render () {
    return null
  }
}

export default TextureAssetTask

