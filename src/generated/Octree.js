import React from 'react'
import BABYLON from 'babylonjs'

class Octree extends React.Component {
  constructor (props) {
    super(props)
    const { maxDepth, blocks, dynamicContent, CreationFuncForMeshes, CreationFuncForSubMeshes, creationFunc, maxBlockCapacity, maxDepth } = props
    this.Octree = new BABYLON.Octree(creationFunc, maxBlockCapacity, maxDepth)
    this.Octree.maxDepth = maxDepth
    this.Octree.blocks = blocks
    this.Octree.dynamicContent = dynamicContent
    this.Octree.CreationFuncForMeshes = CreationFuncForMeshes
    this.Octree.CreationFuncForSubMeshes = CreationFuncForSubMeshes
  }

  render () {
    return null
  }
}

export default Octree

