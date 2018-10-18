import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class CustomProceduralTexture extends React.Component {
  constructor (props) {
    super(props)
    const { animate, name, texturePath, size, scene, fallbackTexture, generateMipMaps } = props
    this.CustomProceduralTexture = new BABYLON.CustomProceduralTexture(name, texturePath, size, scene, fallbackTexture, generateMipMaps)
    this.CustomProceduralTexture.animate = animate
  }

  render () {
    return null
  }
}

export default withScene(CustomProceduralTexture)

