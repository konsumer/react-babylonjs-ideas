import React from 'react'
import BABYLON from 'babylonjs'

class SceneLoader extends React.Component {
  constructor (props) {
    super(props)
    const { NO_LOGGING, MINIMAL_LOGGING, SUMMARY_LOGGING, DETAILED_LOGGING, ForceFullSceneLoadingForIncremental, ShowLoadingScreen, loggingLevel, CleanBoneMatrixWeights, OnPluginActivatedObservable } = props
    this.SceneLoader = new BABYLON.SceneLoader()
    this.SceneLoader.NO_LOGGING = NO_LOGGING
    this.SceneLoader.MINIMAL_LOGGING = MINIMAL_LOGGING
    this.SceneLoader.SUMMARY_LOGGING = SUMMARY_LOGGING
    this.SceneLoader.DETAILED_LOGGING = DETAILED_LOGGING
    this.SceneLoader.ForceFullSceneLoadingForIncremental = ForceFullSceneLoadingForIncremental
    this.SceneLoader.ShowLoadingScreen = ShowLoadingScreen
    this.SceneLoader.loggingLevel = loggingLevel
    this.SceneLoader.CleanBoneMatrixWeights = CleanBoneMatrixWeights
    this.SceneLoader.OnPluginActivatedObservable = OnPluginActivatedObservable
  }

  render () {
    return null
  }
}

export default SceneLoader

