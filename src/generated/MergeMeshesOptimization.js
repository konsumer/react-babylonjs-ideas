import React from 'react'
import BABYLON from 'babylonjs'

class MergeMeshesOptimization extends React.Component {
  constructor (props) {
    super(props)
    const { UpdateSelectionTree } = props
    this.MergeMeshesOptimization = new BABYLON.MergeMeshesOptimization()
    this.MergeMeshesOptimization.UpdateSelectionTree = UpdateSelectionTree
  }

  render () {
    return null
  }
}

export default MergeMeshesOptimization

