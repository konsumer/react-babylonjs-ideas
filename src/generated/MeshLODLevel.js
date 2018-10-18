import React from 'react'
import BABYLON from 'babylonjs'

class MeshLODLevel extends React.Component {
  constructor (props) {
    super(props)
    const { distance, mesh, distance, mesh } = props
    this.MeshLODLevel = new BABYLON.MeshLODLevel(distance, mesh)
    this.MeshLODLevel.distance = distance
    this.MeshLODLevel.mesh = mesh
  }

  render () {
    return null
  }
}

export default MeshLODLevel

