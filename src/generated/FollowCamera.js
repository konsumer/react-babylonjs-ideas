import React from 'react'

class FollowCamera extends React.Component {
  constructor (props) {
    super(props)
    const { radius, rotationOffset, heightOffset, cameraAcceleration, maxCameraSpeed, lockedTarget } = props
    this.FollowCamera = new FollowCamera(radius, rotationOffset, heightOffset, cameraAcceleration, maxCameraSpeed, lockedTarget)
  }

  render () {
    return null
  }
}

export default FollowCamera

