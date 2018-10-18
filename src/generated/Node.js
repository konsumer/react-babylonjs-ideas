import React from 'react'

class Node extends React.Component {
  constructor (props) {
    super(props)
    const { name, id, uniqueId, state, metadata, doNotSerialize, animations, onReady, parent, addToSceneRootNodes, removeFromSceneRootNodes, animationPropertiesOverride, onDisposeObservable, onDispose, behaviors, worldMatrixFromCache } = props
    this.Node = new Node(name, id, uniqueId, state, metadata, doNotSerialize, animations, onReady, parent, addToSceneRootNodes, removeFromSceneRootNodes, animationPropertiesOverride, onDisposeObservable, onDispose, behaviors, worldMatrixFromCache)
  }

  render () {
    return null
  }
}

export default Node

