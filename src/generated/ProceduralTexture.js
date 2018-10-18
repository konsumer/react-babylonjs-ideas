import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ProceduralTexture extends React.Component {
  constructor (props) {
    super(props)
    const { isCube, isEnabled, autoClear, onGenerated, onGeneratedObservable, refreshRate, name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube } = props
    this.ProceduralTexture = new BABYLON.ProceduralTexture(name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube)
    this.ProceduralTexture.isCube = isCube
    this.ProceduralTexture.isEnabled = isEnabled
    this.ProceduralTexture.autoClear = autoClear
    this.ProceduralTexture.onGenerated = onGenerated
    this.ProceduralTexture.onGeneratedObservable = onGeneratedObservable
    this.ProceduralTexture.refreshRate = refreshRate
  }

  render () {
    return null
  }
}

export default withScene(ProceduralTexture)

