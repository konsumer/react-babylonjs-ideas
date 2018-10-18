import React from 'react'

class EnvironmentHelper extends React.Component {
  constructor (props) {
    super(props)
    const { rootMesh, skybox, skyboxTexture, skyboxMaterial, ground, groundTexture, groundMirror, groundMirrorRenderList, groundMaterial, onErrorObservable } = props
    this.EnvironmentHelper = new EnvironmentHelper(rootMesh, skybox, skyboxTexture, skyboxMaterial, ground, groundTexture, groundMirror, groundMirrorRenderList, groundMaterial, onErrorObservable)
  }

  render () {
    return null
  }
}

export default EnvironmentHelper

