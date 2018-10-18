import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RawTexture extends React.Component {
  constructor (props) {
    super(props)
    const { format, data, width, height, format, scene, generateMipMaps, invertY, samplingMode, type } = props
    this.RawTexture = new BABYLON.RawTexture(data, width, height, format, scene, generateMipMaps, invertY, samplingMode, type)
    this.RawTexture.format = format
  }

  render () {
    return null
  }
}

export default withScene(RawTexture)

