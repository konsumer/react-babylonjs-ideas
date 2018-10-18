import React from 'react'

class PhotoDome extends React.Component {
  constructor (props) {
    super(props)
    const { photoTexture, onLoadErrorObservable, fovMultiplier } = props
    this.PhotoDome = new PhotoDome(photoTexture, onLoadErrorObservable, fovMultiplier)
  }

  render () {
    return null
  }
}

export default PhotoDome

