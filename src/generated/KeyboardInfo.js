import React from 'react'
import BABYLON from 'babylonjs'

class KeyboardInfo extends React.Component {
  constructor (props) {
    super(props)
    const { type, event, type, event } = props
    this.KeyboardInfo = new BABYLON.KeyboardInfo(type, event)
    this.KeyboardInfo.type = type
    this.KeyboardInfo.event = event
  }

  render () {
    return null
  }
}

export default KeyboardInfo

