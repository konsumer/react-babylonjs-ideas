import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class VideoDome extends React.Component {
  constructor (props) {
    super(props)
    const { videoTexture, fovMultiplier, name, urlsOrVideo, options, scene } = props
    this.VideoDome = new BABYLON.VideoDome(name, urlsOrVideo, options, scene)
    this.VideoDome.videoTexture = videoTexture
    this.VideoDome.fovMultiplier = fovMultiplier
  }

  render () {
    return null
  }
}

export default withScene(VideoDome)

