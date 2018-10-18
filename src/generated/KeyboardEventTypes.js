import React from 'react'
import BABYLON from 'babylonjs'

class KeyboardEventTypes extends React.Component {
  constructor (props) {
    super(props)
    const { KEYDOWN, KEYUP } = props
    this.KeyboardEventTypes = new BABYLON.KeyboardEventTypes()
    this.KeyboardEventTypes.KEYDOWN = KEYDOWN
    this.KeyboardEventTypes.KEYUP = KEYUP
  }

  render () {
    return null
  }
}

export default KeyboardEventTypes

