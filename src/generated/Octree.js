import React from 'react'

class Octree extends React.Component {
  constructor (props) {
    super(props)
    const { maxDepth, blocks, dynamicContent } = props
    this.Octree = new Octree(maxDepth, blocks, dynamicContent)
  }

  render () {
    return null
  }
}

export default Octree

