import React from 'react'

class PositionNormalTextureVertex extends React.Component {
  constructor (props) {
    super(props)
    const { position, normal, uv } = props
    this.PositionNormalTextureVertex = new PositionNormalTextureVertex(position, normal, uv)
  }

  render () {
    return null
  }
}

export default PositionNormalTextureVertex

