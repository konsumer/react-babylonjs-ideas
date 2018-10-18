import React from 'react'

class CircleOfConfusionPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { lensSize, fStop, focusDistance, focalLength, depthTexture } = props
    this.CircleOfConfusionPostProcess = new CircleOfConfusionPostProcess(lensSize, fStop, focusDistance, focalLength, depthTexture)
  }

  render () {
    return null
  }
}

export default CircleOfConfusionPostProcess

