import React from 'react'
import BABYLON from 'babylonjs'

class MeshAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, meshesNames, rootUrl, sceneFilename, loadedMeshes, loadedParticleSystems, loadedSkeletons, onSuccess, onError, name, meshesNames, rootUrl, sceneFilename } = props
    this.MeshAssetTask = new BABYLON.MeshAssetTask(name, meshesNames, rootUrl, sceneFilename)
    this.MeshAssetTask.name = name
    this.MeshAssetTask.meshesNames = meshesNames
    this.MeshAssetTask.rootUrl = rootUrl
    this.MeshAssetTask.sceneFilename = sceneFilename
    this.MeshAssetTask.loadedMeshes = loadedMeshes
    this.MeshAssetTask.loadedParticleSystems = loadedParticleSystems
    this.MeshAssetTask.loadedSkeletons = loadedSkeletons
    this.MeshAssetTask.onSuccess = onSuccess
    this.MeshAssetTask.onError = onError
  }

  render () {
    return null
  }
}

export default MeshAssetTask

