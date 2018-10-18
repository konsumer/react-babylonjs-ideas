import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class CubeTexture extends React.Component {
  constructor (props) {
    super(props)
    const { url, boundingBoxPosition, boundingBoxSize, rotationY, rootUrl, scene, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset } = props
    this.CubeTexture = new BABYLON.CubeTexture(rootUrl, scene, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset)
    this.CubeTexture.url = url
    this.CubeTexture.boundingBoxPosition = boundingBoxPosition
    this.CubeTexture.boundingBoxSize = boundingBoxSize
    this.CubeTexture.rotationY = rotationY
  }

  render () {
    return null
  }
}

export default withScene(CubeTexture)

