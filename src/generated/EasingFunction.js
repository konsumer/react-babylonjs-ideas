import React from 'react'
import BABYLON from 'babylonjs'

class EasingFunction extends React.Component {
  constructor (props) {
    super(props)
    const { EASINGMODE_EASEIN, EASINGMODE_EASEOUT, EASINGMODE_EASEINOUT } = props
    this.EasingFunction = new BABYLON.EasingFunction()
    this.EasingFunction.EASINGMODE_EASEIN = EASINGMODE_EASEIN
    this.EasingFunction.EASINGMODE_EASEOUT = EASINGMODE_EASEOUT
    this.EasingFunction.EASINGMODE_EASEINOUT = EASINGMODE_EASEINOUT
  }

  render () {
    return null
  }
}

export default EasingFunction

