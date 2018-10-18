import React from 'react'
import BABYLON from 'babylonjs'

class AudioEngine extends React.Component {
  constructor (props) {
    super(props)
    const { canUseWebAudio, masterGain, WarnedWebAudioUnsupported, isMP3supported, isOGGsupported, unlocked, useCustomUnlockedButton, onAudioUnlockedObservable, onAudioLockedObservable, audioContext, hostElement } = props
    this.AudioEngine = new BABYLON.AudioEngine(hostElement)
    this.AudioEngine.canUseWebAudio = canUseWebAudio
    this.AudioEngine.masterGain = masterGain
    this.AudioEngine.WarnedWebAudioUnsupported = WarnedWebAudioUnsupported
    this.AudioEngine.isMP3supported = isMP3supported
    this.AudioEngine.isOGGsupported = isOGGsupported
    this.AudioEngine.unlocked = unlocked
    this.AudioEngine.useCustomUnlockedButton = useCustomUnlockedButton
    this.AudioEngine.onAudioUnlockedObservable = onAudioUnlockedObservable
    this.AudioEngine.onAudioLockedObservable = onAudioLockedObservable
    this.AudioEngine.audioContext = audioContext
  }

  render () {
    return null
  }
}

export default AudioEngine

