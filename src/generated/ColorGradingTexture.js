import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ColorGradingTexture extends React.Component {
  constructor (props) {
    super(props)
    const { url, load3dlTexture, loadTexture, url, scene } = props
    this.ColorGradingTexture = new BABYLON.ColorGradingTexture(url, scene)
    this.ColorGradingTexture.url = url
    this.ColorGradingTexture.load3dlTexture = load3dlTexture
    this.ColorGradingTexture.loadTexture = loadTexture
  }

  render () {
    return null
  }
}

export default withScene(ColorGradingTexture)

