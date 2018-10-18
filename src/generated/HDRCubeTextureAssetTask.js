import React from 'react'

class HDRCubeTextureAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved, texture, onSuccess, onError } = props
    this.HDRCubeTextureAssetTask = new HDRCubeTextureAssetTask(name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved, texture, onSuccess, onError)
  }

  render () {
    return null
  }
}

export default HDRCubeTextureAssetTask

