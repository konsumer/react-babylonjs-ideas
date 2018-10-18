import React from 'react'
import BABYLON from 'babylonjs'

class OctreeBlock extends React.Component {
  constructor (props) {
    super(props)
    const { entries, blocks, capacity, minPoint, maxPoint, minPoint, maxPoint, capacity, depth, maxDepth, creationFunc } = props
    this.OctreeBlock = new BABYLON.OctreeBlock(minPoint, maxPoint, capacity, depth, maxDepth, creationFunc)
    this.OctreeBlock.entries = entries
    this.OctreeBlock.blocks = blocks
    this.OctreeBlock.capacity = capacity
    this.OctreeBlock.minPoint = minPoint
    this.OctreeBlock.maxPoint = maxPoint
  }

  render () {
    return null
  }
}

export default OctreeBlock

