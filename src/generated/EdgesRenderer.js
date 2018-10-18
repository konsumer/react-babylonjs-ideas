import React from 'react'
import BABYLON from 'babylonjs'

class EdgesRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { edgesWidthScalerForOrthographic, edgesWidthScalerForPerspective, isEnabled, source, epsilon, checkVerticesInsteadOfIndices, generateEdgesLines } = props
    this.EdgesRenderer = new BABYLON.EdgesRenderer(source, epsilon, checkVerticesInsteadOfIndices, generateEdgesLines)
    this.EdgesRenderer.edgesWidthScalerForOrthographic = edgesWidthScalerForOrthographic
    this.EdgesRenderer.edgesWidthScalerForPerspective = edgesWidthScalerForPerspective
    this.EdgesRenderer.isEnabled = isEnabled
  }

  render () {
    return null
  }
}

export default EdgesRenderer

