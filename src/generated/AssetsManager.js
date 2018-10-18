import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AssetsManager extends React.Component {
  constructor (props) {
    super(props)
    const { onFinish, onTaskSuccess, onTaskError, onProgress, onTaskSuccessObservable, onTaskErrorObservable, onTasksDoneObservable, onProgressObservable, useDefaultLoadingScreen, scene } = props
    this.AssetsManager = new BABYLON.AssetsManager(scene)
    this.AssetsManager.onFinish = onFinish
    this.AssetsManager.onTaskSuccess = onTaskSuccess
    this.AssetsManager.onTaskError = onTaskError
    this.AssetsManager.onProgress = onProgress
    this.AssetsManager.onTaskSuccessObservable = onTaskSuccessObservable
    this.AssetsManager.onTaskErrorObservable = onTaskErrorObservable
    this.AssetsManager.onTasksDoneObservable = onTasksDoneObservable
    this.AssetsManager.onProgressObservable = onProgressObservable
    this.AssetsManager.useDefaultLoadingScreen = useDefaultLoadingScreen
  }

  render () {
    return null
  }
}

export default withScene(AssetsManager)

