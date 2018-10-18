import React from 'react'

class ShadowLight extends React.Component {
  constructor (props) {
    super(props)
    const { position, direction, shadowMinZ, shadowMaxZ, customProjectionMatrixBuilder, transformedPosition, transformedDirection } = props
    this.ShadowLight = new ShadowLight(position, direction, shadowMinZ, shadowMaxZ, customProjectionMatrixBuilder, transformedPosition, transformedDirection)
  }

  render () {
    return null
  }
}

export default ShadowLight

