import React from 'react'

class DepthOfFieldEffect extends React.Component {
  constructor (props) {
    super(props)
    const { focalLength, fStop, focusDistance, lensSize, depthTexture } = props
    this.DepthOfFieldEffect = new DepthOfFieldEffect(focalLength, fStop, focusDistance, lensSize, depthTexture)
  }

  render () {
    return null
  }
}

export default DepthOfFieldEffect

