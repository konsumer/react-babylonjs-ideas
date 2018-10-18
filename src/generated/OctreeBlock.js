import React from 'react'

class OctreeBlock extends React.Component {
  constructor (props) {
    super(props)
    const { entries, blocks, capacity, minPoint, maxPoint } = props
    this.OctreeBlock = new OctreeBlock(entries, blocks, capacity, minPoint, maxPoint)
  }

  render () {
    return null
  }
}

export default OctreeBlock

