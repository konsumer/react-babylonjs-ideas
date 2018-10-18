import React from 'react'

class MeshAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, meshesNames, rootUrl, sceneFilename, loadedMeshes, loadedParticleSystems, loadedSkeletons, onSuccess, onError } = props
    this.MeshAssetTask = new MeshAssetTask(name, meshesNames, rootUrl, sceneFilename, loadedMeshes, loadedParticleSystems, loadedSkeletons, onSuccess, onError)
  }

  render () {
    return null
  }
}

export default MeshAssetTask

