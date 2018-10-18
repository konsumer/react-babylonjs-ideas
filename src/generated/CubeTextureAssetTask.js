import React from 'react'

class CubeTextureAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, extensions, noMipmap, files, texture, onSuccess, onError } = props
    this.CubeTextureAssetTask = new CubeTextureAssetTask(name, url, extensions, noMipmap, files, texture, onSuccess, onError)
  }

  render () {
    return null
  }
}

export default CubeTextureAssetTask

