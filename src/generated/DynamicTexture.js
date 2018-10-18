import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DynamicTexture extends React.Component {
  constructor (props) {
    super(props)
    const { canRescale, name, options, scene, generateMipMaps, samplingMode, format } = props
    this.DynamicTexture = new BABYLON.DynamicTexture(name, options, scene, generateMipMaps, samplingMode, format)
    this.DynamicTexture.canRescale = canRescale
  }

  render () {
    return null
  }
}

export default withScene(DynamicTexture)

