import React from 'react'

class SubMesh extends React.Component {
  constructor (props) {
    super(props)
    const { materialIndex, verticesStart, verticesCount, indexStart, indexCount, IsGlobal } = props
    this.SubMesh = new SubMesh(materialIndex, verticesStart, verticesCount, indexStart, indexCount, IsGlobal)
  }

  render () {
    return null
  }
}

export default SubMesh

