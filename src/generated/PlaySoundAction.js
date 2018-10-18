import React from 'react'
import BABYLON from 'babylonjs'

class PlaySoundAction extends React.Component {
  constructor (props) {
    super(props)
    const { triggerOptions, sound, condition } = props
    this.PlaySoundAction = new BABYLON.PlaySoundAction(triggerOptions, sound, condition)
    
  }

  render () {
    return null
  }
}

export default PlaySoundAction

