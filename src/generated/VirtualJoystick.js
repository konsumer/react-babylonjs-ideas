import React from 'react'
import BABYLON from 'babylonjs'

class VirtualJoystick extends React.Component {
  constructor (props) {
    super(props)
    const { reverseLeftRight, reverseUpDown, deltaPosition, pressed, vjCanvas, vjCanvasContext, vjCanvasWidth, vjCanvasHeight, halfWidth, leftJoystick } = props
    this.VirtualJoystick = new BABYLON.VirtualJoystick(leftJoystick)
    this.VirtualJoystick.reverseLeftRight = reverseLeftRight
    this.VirtualJoystick.reverseUpDown = reverseUpDown
    this.VirtualJoystick.deltaPosition = deltaPosition
    this.VirtualJoystick.pressed = pressed
    this.VirtualJoystick.vjCanvas = vjCanvas
    this.VirtualJoystick.vjCanvasContext = vjCanvasContext
    this.VirtualJoystick.vjCanvasWidth = vjCanvasWidth
    this.VirtualJoystick.vjCanvasHeight = vjCanvasHeight
    this.VirtualJoystick.halfWidth = halfWidth
  }

  render () {
    return null
  }
}

export default VirtualJoystick

