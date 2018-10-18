import React from 'react'

class HDRCubeTexture extends React.Component {
  constructor (props) {
    super(props)
    const { url, coordinatesMode, isBlocking, rotationY, boundingBoxPosition, boundingBoxSize, loadTexture } = props
    this.HDRCubeTexture = new HDRCubeTexture(url, coordinatesMode, isBlocking, rotationY, boundingBoxPosition, boundingBoxSize, loadTexture)
  }

  render () {
    return null
  }
}

export default HDRCubeTexture

