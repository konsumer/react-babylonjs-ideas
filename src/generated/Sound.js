import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Sound extends React.Component {
  constructor (props) {
    super(props)
    const { name, autoplay, loop, useCustomAttenuation, soundTrackId, isPlaying, isPaused, spatialSound, refDistance, rolloffFactor, maxDistance, distanceModel, onended, onEndedObservable, directionalConeInnerAngle, directionalConeOuterAngle, name, urlOrArrayBuffer, scene, readyToPlayCallback, options } = props
    this.Sound = new BABYLON.Sound(name, urlOrArrayBuffer, scene, readyToPlayCallback, options)
    this.Sound.name = name
    this.Sound.autoplay = autoplay
    this.Sound.loop = loop
    this.Sound.useCustomAttenuation = useCustomAttenuation
    this.Sound.soundTrackId = soundTrackId
    this.Sound.isPlaying = isPlaying
    this.Sound.isPaused = isPaused
    this.Sound.spatialSound = spatialSound
    this.Sound.refDistance = refDistance
    this.Sound.rolloffFactor = rolloffFactor
    this.Sound.maxDistance = maxDistance
    this.Sound.distanceModel = distanceModel
    this.Sound.onended = onended
    this.Sound.onEndedObservable = onEndedObservable
    this.Sound.directionalConeInnerAngle = directionalConeInnerAngle
    this.Sound.directionalConeOuterAngle = directionalConeOuterAngle
  }

  render () {
    return null
  }
}

export default withScene(Sound)

