import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Node extends React.Component {
  constructor (props) {
    super(props)
    const { name, id, uniqueId, state, metadata, doNotSerialize, animations, onReady, parent, addToSceneRootNodes, removeFromSceneRootNodes, animationPropertiesOverride, onDisposeObservable, onDispose, behaviors, worldMatrixFromCache, name, scene } = props
    this.Node = new BABYLON.Node(name, scene)
    this.Node.name = name
    this.Node.id = id
    this.Node.uniqueId = uniqueId
    this.Node.state = state
    this.Node.metadata = metadata
    this.Node.doNotSerialize = doNotSerialize
    this.Node.animations = animations
    this.Node.onReady = onReady
    this.Node.parent = parent
    this.Node.addToSceneRootNodes = addToSceneRootNodes
    this.Node.removeFromSceneRootNodes = removeFromSceneRootNodes
    this.Node.animationPropertiesOverride = animationPropertiesOverride
    this.Node.onDisposeObservable = onDisposeObservable
    this.Node.onDispose = onDispose
    this.Node.behaviors = behaviors
    this.Node.worldMatrixFromCache = worldMatrixFromCache
  }

  render () {
    return null
  }
}

export default withScene(Node)

