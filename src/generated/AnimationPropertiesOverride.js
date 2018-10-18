import React from 'react'
import BABYLON from 'babylonjs'

class AnimationPropertiesOverride extends React.Component {
  constructor (props) {
    super(props)
    const { enableBlending, blendingSpeed, loopMode } = props
    this.AnimationPropertiesOverride = new BABYLON.AnimationPropertiesOverride()
    this.AnimationPropertiesOverride.enableBlending = enableBlending
    this.AnimationPropertiesOverride.blendingSpeed = blendingSpeed
    this.AnimationPropertiesOverride.loopMode = loopMode
  }

  render () {
    return null
  }
}

export default AnimationPropertiesOverride

