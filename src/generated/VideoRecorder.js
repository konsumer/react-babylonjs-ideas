import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class VideoRecorder extends React.Component {
  constructor (props) {
    super(props)
    const { isRecording, engine, options } = props
    this.VideoRecorder = new BABYLON.VideoRecorder(engine, options)
    this.VideoRecorder.isRecording = isRecording
  }

  render () {
    return null
  }
}

export default withEngine(VideoRecorder)

