import React from 'react'

class VideoTexture extends React.Component {
  constructor (props) {
    super(props)
    const { autoUpdateTexture, video, onUserActionRequestedObservable, reset } = props
    this.VideoTexture = new VideoTexture(autoUpdateTexture, video, onUserActionRequestedObservable, reset)
  }

  render () {
    return null
  }
}

export default VideoTexture

