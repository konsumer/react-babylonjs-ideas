import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class EnvironmentHelper extends React.Component {
  constructor (props) {
    super(props)
    const { rootMesh, skybox, skyboxTexture, skyboxMaterial, ground, groundTexture, groundMirror, groundMirrorRenderList, groundMaterial, onErrorObservable, options, scene } = props
    this.EnvironmentHelper = new BABYLON.EnvironmentHelper(options, scene)
    this.EnvironmentHelper.rootMesh = rootMesh
    this.EnvironmentHelper.skybox = skybox
    this.EnvironmentHelper.skyboxTexture = skyboxTexture
    this.EnvironmentHelper.skyboxMaterial = skyboxMaterial
    this.EnvironmentHelper.ground = ground
    this.EnvironmentHelper.groundTexture = groundTexture
    this.EnvironmentHelper.groundMirror = groundMirror
    this.EnvironmentHelper.groundMirrorRenderList = groundMirrorRenderList
    this.EnvironmentHelper.groundMaterial = groundMaterial
    this.EnvironmentHelper.onErrorObservable = onErrorObservable
  }

  render () {
    return null
  }
}

export default withScene(EnvironmentHelper)

