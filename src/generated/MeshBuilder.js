import React from 'react'
import BABYLON from 'babylonjs'

class MeshBuilder extends React.Component {
  constructor (props) {
    super(props)
    const { updateSideOrientation } = props
    this.MeshBuilder = new BABYLON.MeshBuilder()
    this.MeshBuilder.updateSideOrientation = updateSideOrientation
  }

  render () {
    return null
  }
}

export default MeshBuilder

