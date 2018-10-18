import React from 'react'
import BABYLON from 'babylonjs'

class HDRCubeTextureAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved, texture, onSuccess, onError, name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved } = props
    this.HDRCubeTextureAssetTask = new BABYLON.HDRCubeTextureAssetTask(name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved)
    this.HDRCubeTextureAssetTask.name = name
    this.HDRCubeTextureAssetTask.url = url
    this.HDRCubeTextureAssetTask.size = size
    this.HDRCubeTextureAssetTask.noMipmap = noMipmap
    this.HDRCubeTextureAssetTask.generateHarmonics = generateHarmonics
    this.HDRCubeTextureAssetTask.gammaSpace = gammaSpace
    this.HDRCubeTextureAssetTask.reserved = reserved
    this.HDRCubeTextureAssetTask.texture = texture
    this.HDRCubeTextureAssetTask.onSuccess = onSuccess
    this.HDRCubeTextureAssetTask.onError = onError
  }

  render () {
    return null
  }
}

export default HDRCubeTextureAssetTask

