import React from 'react'
import BABYLON from 'babylonjs'

class ShadowLight extends React.Component {
  constructor (props) {
    super(props)
    const { position, direction, shadowMinZ, shadowMaxZ, customProjectionMatrixBuilder, transformedPosition, transformedDirection } = props
    this.ShadowLight = new BABYLON.ShadowLight()
    this.ShadowLight.position = position
    this.ShadowLight.direction = direction
    this.ShadowLight.shadowMinZ = shadowMinZ
    this.ShadowLight.shadowMaxZ = shadowMaxZ
    this.ShadowLight.customProjectionMatrixBuilder = customProjectionMatrixBuilder
    this.ShadowLight.transformedPosition = transformedPosition
    this.ShadowLight.transformedDirection = transformedDirection
  }

  render () {
    return null
  }
}

export default ShadowLight

