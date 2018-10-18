import React from 'react'

class BoundingInfo extends React.Component {
  constructor (props) {
    super(props)
    const { boundingBox, boundingSphere, minimum, maximum, isLocked, diagonalLength } = props
    this.BoundingInfo = new BoundingInfo(boundingBox, boundingSphere, minimum, maximum, isLocked, diagonalLength)
  }

  render () {
    return null
  }
}

export default BoundingInfo

