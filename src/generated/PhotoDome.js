import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PhotoDome extends React.Component {
  constructor (props) {
    super(props)
    const { photoTexture, onLoadErrorObservable, fovMultiplier, name, urlOfPhoto, options, scene, onError } = props
    this.PhotoDome = new BABYLON.PhotoDome(name, urlOfPhoto, options, scene, onError)
    this.PhotoDome.photoTexture = photoTexture
    this.PhotoDome.onLoadErrorObservable = onLoadErrorObservable
    this.PhotoDome.fovMultiplier = fovMultiplier
  }

  render () {
    return null
  }
}

export default withScene(PhotoDome)

