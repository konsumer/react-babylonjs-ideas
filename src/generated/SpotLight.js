import React from 'react'

class SpotLight extends React.Component {
  constructor (props) {
    super(props)
    const { angle, innerAngle, shadowAngleScale, exponent, projectionTextureMatrix, projectionTextureLightNear, projectionTextureLightFar, projectionTextureUpDirection, projectionTexture } = props
    this.SpotLight = new SpotLight(angle, innerAngle, shadowAngleScale, exponent, projectionTextureMatrix, projectionTextureLightNear, projectionTextureLightFar, projectionTextureUpDirection, projectionTexture)
  }

  render () {
    return null
  }
}

export default SpotLight

