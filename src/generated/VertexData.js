import React from 'react'

class VertexData extends React.Component {
  constructor (props) {
    super(props)
    const { positions, normals, tangents, uvs, uvs2, uvs3, uvs4, uvs5, uvs6, colors, matricesIndices, matricesWeights, matricesIndicesExtra, matricesWeightsExtra, indices } = props
    this.VertexData = new VertexData(positions, normals, tangents, uvs, uvs2, uvs3, uvs4, uvs5, uvs6, colors, matricesIndices, matricesWeights, matricesIndicesExtra, matricesWeightsExtra, indices)
  }

  render () {
    return null
  }
}

export default VertexData

