import React from 'react'

class Gamepad extends React.Component {
  constructor (props) {
    super(props)
    const { id, index, browserGamepad, type, isConnected, leftStick, rightStick } = props
    this.Gamepad = new Gamepad(id, index, browserGamepad, type, isConnected, leftStick, rightStick)
  }

  render () {
    return null
  }
}

export default Gamepad

