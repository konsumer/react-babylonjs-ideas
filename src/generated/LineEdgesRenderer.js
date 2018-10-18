import React from 'react'
import BABYLON from 'babylonjs'

class LineEdgesRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { source, epsilon, checkVerticesInsteadOfIndices } = props
    this.LineEdgesRenderer = new BABYLON.LineEdgesRenderer(source, epsilon, checkVerticesInsteadOfIndices)
    
  }

  render () {
    return null
  }
}

export default LineEdgesRenderer

