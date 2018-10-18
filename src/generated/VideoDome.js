import React from 'react'

class VideoDome extends React.Component {
  constructor (props) {
    super(props)
    const { videoTexture, fovMultiplier } = props
    this.VideoDome = new VideoDome(videoTexture, fovMultiplier)
  }

  render () {
    return null
  }
}

export default VideoDome

