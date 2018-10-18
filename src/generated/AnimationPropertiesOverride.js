import React from 'react'

class AnimationPropertiesOverride extends React.Component {
  constructor (props) {
    super(props)
    const { enableBlending, blendingSpeed, loopMode } = props
    this.AnimationPropertiesOverride = new AnimationPropertiesOverride(enableBlending, blendingSpeed, loopMode)
  }

  render () {
    return null
  }
}

export default AnimationPropertiesOverride

