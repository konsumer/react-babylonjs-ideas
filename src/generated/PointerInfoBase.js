import React from 'react'
import BABYLON from 'babylonjs'

class PointerInfoBase extends React.Component {
  constructor (props) {
    super(props)
    const { type, event, type, event } = props
    this.PointerInfoBase = new BABYLON.PointerInfoBase(type, event)
    this.PointerInfoBase.type = type
    this.PointerInfoBase.event = event
  }

  render () {
    return null
  }
}

export default PointerInfoBase

