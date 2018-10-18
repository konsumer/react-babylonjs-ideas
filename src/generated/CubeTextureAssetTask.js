import React from 'react'
import BABYLON from 'babylonjs'

class CubeTextureAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, extensions, noMipmap, files, texture, onSuccess, onError, name, url, extensions, noMipmap, files } = props
    this.CubeTextureAssetTask = new BABYLON.CubeTextureAssetTask(name, url, extensions, noMipmap, files)
    this.CubeTextureAssetTask.name = name
    this.CubeTextureAssetTask.url = url
    this.CubeTextureAssetTask.extensions = extensions
    this.CubeTextureAssetTask.noMipmap = noMipmap
    this.CubeTextureAssetTask.files = files
    this.CubeTextureAssetTask.texture = texture
    this.CubeTextureAssetTask.onSuccess = onSuccess
    this.CubeTextureAssetTask.onError = onError
  }

  render () {
    return null
  }
}

export default CubeTextureAssetTask

