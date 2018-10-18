import React from 'react'
import BABYLON from 'babylonjs'

class FadeInOutBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { delay, fadeInTime, name } = props
    this.FadeInOutBehavior = new BABYLON.FadeInOutBehavior()
    this.FadeInOutBehavior.delay = delay
    this.FadeInOutBehavior.fadeInTime = fadeInTime
    this.FadeInOutBehavior.name = name
  }

  render () {
    return null
  }
}

export default FadeInOutBehavior

