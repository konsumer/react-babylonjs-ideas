import React from 'react'

class ImageAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, image, onSuccess, onError } = props
    this.ImageAssetTask = new ImageAssetTask(name, url, image, onSuccess, onError)
  }

  render () {
    return null
  }
}

export default ImageAssetTask

