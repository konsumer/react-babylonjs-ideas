import React from 'react'

class AudioEngine extends React.Component {
  constructor (props) {
    super(props)
    const { canUseWebAudio, masterGain, WarnedWebAudioUnsupported, isMP3supported, isOGGsupported, unlocked, useCustomUnlockedButton, onAudioUnlockedObservable, onAudioLockedObservable, audioContext } = props
    this.AudioEngine = new AudioEngine(canUseWebAudio, masterGain, WarnedWebAudioUnsupported, isMP3supported, isOGGsupported, unlocked, useCustomUnlockedButton, onAudioUnlockedObservable, onAudioLockedObservable, audioContext)
  }

  render () {
    return null
  }
}

export default AudioEngine

