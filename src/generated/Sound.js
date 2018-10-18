import React from 'react'

class Sound extends React.Component {
  constructor (props) {
    super(props)
    const { name, autoplay, loop, useCustomAttenuation, soundTrackId, isPlaying, isPaused, spatialSound, refDistance, rolloffFactor, maxDistance, distanceModel, onended, onEndedObservable, directionalConeInnerAngle, directionalConeOuterAngle } = props
    this.Sound = new Sound(name, autoplay, loop, useCustomAttenuation, soundTrackId, isPlaying, isPaused, spatialSound, refDistance, rolloffFactor, maxDistance, distanceModel, onended, onEndedObservable, directionalConeInnerAngle, directionalConeOuterAngle)
  }

  render () {
    return null
  }
}

export default Sound

