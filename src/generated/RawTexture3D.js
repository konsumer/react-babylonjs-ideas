import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RawTexture3D extends React.Component {
  constructor (props) {
    super(props)
    const { format, data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType } = props
    this.RawTexture3D = new BABYLON.RawTexture3D(data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType)
    this.RawTexture3D.format = format
  }

  render () {
    return null
  }
}

export default withScene(RawTexture3D)

