import React from 'react'
import BABYLON from 'babylonjs'

class DefaultLoadingScreen extends React.Component {
  constructor (props) {
    super(props)
    const { loadingUIText, loadingUIBackgroundColor, _renderingCanvas, _loadingText, _loadingDivBackgroundColor } = props
    this.DefaultLoadingScreen = new BABYLON.DefaultLoadingScreen(_renderingCanvas, _loadingText, _loadingDivBackgroundColor)
    this.DefaultLoadingScreen.loadingUIText = loadingUIText
    this.DefaultLoadingScreen.loadingUIBackgroundColor = loadingUIBackgroundColor
  }

  render () {
    return null
  }
}

export default DefaultLoadingScreen

