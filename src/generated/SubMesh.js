import React from 'react'
import BABYLON from 'babylonjs'

class SubMesh extends React.Component {
  constructor (props) {
    super(props)
    const { materialIndex, verticesStart, verticesCount, indexStart, indexCount, IsGlobal, materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox } = props
    this.SubMesh = new BABYLON.SubMesh(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)
    this.SubMesh.materialIndex = materialIndex
    this.SubMesh.verticesStart = verticesStart
    this.SubMesh.verticesCount = verticesCount
    this.SubMesh.indexStart = indexStart
    this.SubMesh.indexCount = indexCount
    this.SubMesh.IsGlobal = IsGlobal
  }

  render () {
    return null
  }
}

export default SubMesh

