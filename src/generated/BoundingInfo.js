import React from 'react'
import BABYLON from 'babylonjs'

class BoundingInfo extends React.Component {
  constructor (props) {
    super(props)
    const { boundingBox, boundingSphere, minimum, maximum, isLocked, diagonalLength, minimum, maximum } = props
    this.BoundingInfo = new BABYLON.BoundingInfo(minimum, maximum)
    this.BoundingInfo.boundingBox = boundingBox
    this.BoundingInfo.boundingSphere = boundingSphere
    this.BoundingInfo.minimum = minimum
    this.BoundingInfo.maximum = maximum
    this.BoundingInfo.isLocked = isLocked
    this.BoundingInfo.diagonalLength = diagonalLength
  }

  render () {
    return null
  }
}

export default BoundingInfo

