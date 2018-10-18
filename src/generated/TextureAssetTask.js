import React from 'react'

class TextureAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, noMipmap, invertY, samplingMode, texture, onSuccess, onError } = props
    this.TextureAssetTask = new TextureAssetTask(name, url, noMipmap, invertY, samplingMode, texture, onSuccess, onError)
  }

  render () {
    return null
  }
}

export default TextureAssetTask

