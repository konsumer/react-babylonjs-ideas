import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RawCubeTexture extends React.Component {
  constructor (props) {
    super(props)
    const { scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression } = props
    this.RawCubeTexture = new BABYLON.RawCubeTexture(scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression)
    
  }

  render () {
    return null
  }
}

export default withScene(RawCubeTexture)

