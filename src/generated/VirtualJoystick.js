import React from 'react'

class VirtualJoystick extends React.Component {
  constructor (props) {
    super(props)
    const { reverseLeftRight, reverseUpDown, deltaPosition, pressed } = props
    this.VirtualJoystick = new VirtualJoystick(reverseLeftRight, reverseUpDown, deltaPosition, pressed)
  }

  render () {
    return null
  }
}

export default VirtualJoystick

