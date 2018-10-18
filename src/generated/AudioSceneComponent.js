import React from 'react'
import { withScene } from './Scene'

class AudioSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, audioEnabled, headphone } = props
    this.AudioSceneComponent = new AudioSceneComponent(name, scene, audioEnabled, headphone)
  }

  render () {
    return null
  }
}

export default withScene(AudioSceneComponent)

