import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class NoiseProceduralTexture extends React.Component {
  constructor (props) {
    super(props)
    const { brightness, octaves, persistence, animationSpeedFactor, name, size, scene, fallbackTexture, generateMipMaps } = props
    this.NoiseProceduralTexture = new BABYLON.NoiseProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps)
    this.NoiseProceduralTexture.brightness = brightness
    this.NoiseProceduralTexture.octaves = octaves
    this.NoiseProceduralTexture.persistence = persistence
    this.NoiseProceduralTexture.animationSpeedFactor = animationSpeedFactor
  }

  render () {
    return null
  }
}

export default withScene(NoiseProceduralTexture)

