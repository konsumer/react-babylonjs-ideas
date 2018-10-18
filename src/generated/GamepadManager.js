import React from 'react'

class GamepadManager extends React.Component {
  constructor (props) {
    super(props)
    const { onGamepadConnectedObservable, onGamepadDisconnectedObservable, gamepads } = props
    this.GamepadManager = new GamepadManager(onGamepadConnectedObservable, onGamepadDisconnectedObservable, gamepads)
  }

  render () {
    return null
  }
}

export default GamepadManager

