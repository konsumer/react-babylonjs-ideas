import React from 'react'
import BABYLON from 'babylonjs'

class AbstractScene extends React.Component {
  constructor (props) {
    super(props)
    const { rootNodes, cameras, lights, meshes, skeletons, particleSystems, animations, animationGroups, multiMaterials, materials, morphTargetManagers, geometries, transformNodes, actionManagers, textures } = props
    this.AbstractScene = new BABYLON.AbstractScene()
    this.AbstractScene.rootNodes = rootNodes
    this.AbstractScene.cameras = cameras
    this.AbstractScene.lights = lights
    this.AbstractScene.meshes = meshes
    this.AbstractScene.skeletons = skeletons
    this.AbstractScene.particleSystems = particleSystems
    this.AbstractScene.animations = animations
    this.AbstractScene.animationGroups = animationGroups
    this.AbstractScene.multiMaterials = multiMaterials
    this.AbstractScene.materials = materials
    this.AbstractScene.morphTargetManagers = morphTargetManagers
    this.AbstractScene.geometries = geometries
    this.AbstractScene.transformNodes = transformNodes
    this.AbstractScene.actionManagers = actionManagers
    this.AbstractScene.textures = textures
  }

  render () {
    return null
  }
}

export default AbstractScene

