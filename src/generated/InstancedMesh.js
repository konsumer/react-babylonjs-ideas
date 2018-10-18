import React from 'react'
import BABYLON from 'babylonjs'

class InstancedMesh extends React.Component {
  constructor (props) {
    super(props)
    const { receiveShadows, material, visibility, skeleton, renderingGroupId, sourceMesh, name, source } = props
    this.InstancedMesh = new BABYLON.InstancedMesh(name, source)
    this.InstancedMesh.receiveShadows = receiveShadows
    this.InstancedMesh.material = material
    this.InstancedMesh.visibility = visibility
    this.InstancedMesh.skeleton = skeleton
    this.InstancedMesh.renderingGroupId = renderingGroupId
    this.InstancedMesh.sourceMesh = sourceMesh
  }

  render () {
    return null
  }
}

export default InstancedMesh

