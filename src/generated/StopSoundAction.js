import React from 'react'
import BABYLON from 'babylonjs'

class StopSoundAction extends React.Component {
  constructor (props) {
    super(props)
    const { triggerOptions, sound, condition } = props
    this.StopSoundAction = new BABYLON.StopSoundAction(triggerOptions, sound, condition)
    
  }

  render () {
    return null
  }
}

export default StopSoundAction

