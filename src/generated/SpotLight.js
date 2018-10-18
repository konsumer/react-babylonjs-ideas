import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SpotLight extends React.Component {
  constructor (props) {
    super(props)
    const { angle, innerAngle, shadowAngleScale, exponent, projectionTextureMatrix, projectionTextureLightNear, projectionTextureLightFar, projectionTextureUpDirection, projectionTexture, name, position, direction, angle, exponent, scene } = props
    this.SpotLight = new BABYLON.SpotLight(name, position, direction, angle, exponent, scene)
    this.SpotLight.angle = angle
    this.SpotLight.innerAngle = innerAngle
    this.SpotLight.shadowAngleScale = shadowAngleScale
    this.SpotLight.exponent = exponent
    this.SpotLight.projectionTextureMatrix = projectionTextureMatrix
    this.SpotLight.projectionTextureLightNear = projectionTextureLightNear
    this.SpotLight.projectionTextureLightFar = projectionTextureLightFar
    this.SpotLight.projectionTextureUpDirection = projectionTextureUpDirection
    this.SpotLight.projectionTexture = projectionTexture
  }

  render () {
    return null
  }
}

export default withScene(SpotLight)

