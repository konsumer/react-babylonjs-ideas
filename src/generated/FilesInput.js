import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'
import { withEngine } from './Engine'

class FilesInput extends React.Component {
  constructor (props) {
    super(props)
    const { FilesToLoad, onProcessFileCallback, renderFunction, drag, drop, engine, scene, sceneLoadedCallback, progressCallback, additionalRenderLoopLogicCallback, textureLoadingCallback, startingProcessingFilesCallback, onReloadCallback, errorCallback } = props
    this.FilesInput = new BABYLON.FilesInput(engine, scene, sceneLoadedCallback, progressCallback, additionalRenderLoopLogicCallback, textureLoadingCallback, startingProcessingFilesCallback, onReloadCallback, errorCallback)
    this.FilesInput.FilesToLoad = FilesToLoad
    this.FilesInput.onProcessFileCallback = onProcessFileCallback
    this.FilesInput.renderFunction = renderFunction
    this.FilesInput.drag = drag
    this.FilesInput.drop = drop
  }

  render () {
    return null
  }
}

export default withEngine(FilesInput)

