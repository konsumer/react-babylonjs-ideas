import React from 'react'

class VideoRecorder extends React.Component {
  constructor (props) {
    super(props)
    const { isRecording } = props
    this.VideoRecorder = new VideoRecorder(isRecording)
  }

  render () {
    return null
  }
}

export default VideoRecorder

