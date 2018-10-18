import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SoundTrack extends React.Component {
  constructor (props) {
    super(props)
    const { id, soundCollection, scene, options } = props
    this.SoundTrack = new BABYLON.SoundTrack(scene, options)
    this.SoundTrack.id = id
    this.SoundTrack.soundCollection = soundCollection
  }

  render () {
    return null
  }
}

export default withScene(SoundTrack)

