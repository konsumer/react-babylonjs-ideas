import React from 'react'
import BABYLON from 'babylonjs'

class EffectFallbacks extends React.Component {
  constructor (props) {
    super(props)
    const { isMoreFallbacks } = props
    this.EffectFallbacks = new BABYLON.EffectFallbacks()
    this.EffectFallbacks.isMoreFallbacks = isMoreFallbacks
  }

  render () {
    return null
  }
}

export default EffectFallbacks

