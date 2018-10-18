import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class VideoTexture extends React.Component {
  constructor (props) {
    super(props)
    const { autoUpdateTexture, video, onUserActionRequestedObservable, reset, name, src, scene, generateMipMaps, invertY, samplingMode, settings } = props
    this.VideoTexture = new BABYLON.VideoTexture(name, src, scene, generateMipMaps, invertY, samplingMode, settings)
    this.VideoTexture.autoUpdateTexture = autoUpdateTexture
    this.VideoTexture.video = video
    this.VideoTexture.onUserActionRequestedObservable = onUserActionRequestedObservable
    this.VideoTexture.reset = reset
  }

  render () {
    return null
  }
}

export default withScene(VideoTexture)

