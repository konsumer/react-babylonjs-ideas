import React from 'react'
import BABYLON from 'babylonjs'

class KeyboardInfoPre extends React.Component {
  constructor (props) {
    super(props)
    const { type, event, skipOnPointerObservable, type, event } = props
    this.KeyboardInfoPre = new BABYLON.KeyboardInfoPre(type, event)
    this.KeyboardInfoPre.type = type
    this.KeyboardInfoPre.event = event
    this.KeyboardInfoPre.skipOnPointerObservable = skipOnPointerObservable
  }

  render () {
    return null
  }
}

export default KeyboardInfoPre

