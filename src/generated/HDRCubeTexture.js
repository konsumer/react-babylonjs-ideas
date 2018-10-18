import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class HDRCubeTexture extends React.Component {
  constructor (props) {
    super(props)
    const { url, coordinatesMode, isBlocking, rotationY, boundingBoxPosition, boundingBoxSize, loadTexture, url, scene, size, noMipmap, generateHarmonics, gammaSpace, reserved, onLoad, onError } = props
    this.HDRCubeTexture = new BABYLON.HDRCubeTexture(url, scene, size, noMipmap, generateHarmonics, gammaSpace, reserved, onLoad, onError)
    this.HDRCubeTexture.url = url
    this.HDRCubeTexture.coordinatesMode = coordinatesMode
    this.HDRCubeTexture.isBlocking = isBlocking
    this.HDRCubeTexture.rotationY = rotationY
    this.HDRCubeTexture.boundingBoxPosition = boundingBoxPosition
    this.HDRCubeTexture.boundingBoxSize = boundingBoxSize
    this.HDRCubeTexture.loadTexture = loadTexture
  }

  render () {
    return null
  }
}

export default withScene(HDRCubeTexture)

