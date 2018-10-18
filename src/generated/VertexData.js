import React from 'react'
import BABYLON from 'babylonjs'

class VertexData extends React.Component {
  constructor (props) {
    super(props)
    const { positions, normals, tangents, uvs, uvs2, uvs3, uvs4, uvs5, uvs6, colors, matricesIndices, matricesWeights, matricesIndicesExtra, matricesWeightsExtra, indices } = props
    this.VertexData = new BABYLON.VertexData()
    this.VertexData.positions = positions
    this.VertexData.normals = normals
    this.VertexData.tangents = tangents
    this.VertexData.uvs = uvs
    this.VertexData.uvs2 = uvs2
    this.VertexData.uvs3 = uvs3
    this.VertexData.uvs4 = uvs4
    this.VertexData.uvs5 = uvs5
    this.VertexData.uvs6 = uvs6
    this.VertexData.colors = colors
    this.VertexData.matricesIndices = matricesIndices
    this.VertexData.matricesWeights = matricesWeights
    this.VertexData.matricesIndicesExtra = matricesIndicesExtra
    this.VertexData.matricesWeightsExtra = matricesWeightsExtra
    this.VertexData.indices = indices
  }

  render () {
    return null
  }
}

export default VertexData

