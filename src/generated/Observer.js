import React from 'react'
import BABYLON from 'babylonjs'

class Observer extends React.Component {
  constructor (props) {
    super(props)
    const { callback, mask, scope, unregisterOnNextCall, callback, mask, scope } = props
    this.Observer = new BABYLON.Observer(callback, mask, scope)
    this.Observer.callback = callback
    this.Observer.mask = mask
    this.Observer.scope = scope
    this.Observer.unregisterOnNextCall = unregisterOnNextCall
  }

  render () {
    return null
  }
}

export default Observer

