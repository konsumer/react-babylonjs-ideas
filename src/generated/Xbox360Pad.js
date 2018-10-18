import React from 'react'
import BABYLON from 'babylonjs'

class Xbox360Pad extends React.Component {
  constructor (props) {
    super(props)
    const { onButtonDownObservable, onButtonUpObservable, onPadDownObservable, onPadUpObservable, leftTrigger, rightTrigger, buttonA, buttonB, buttonX, buttonY, buttonStart, buttonBack, buttonLB, buttonRB, buttonLeftStick, buttonRightStick, dPadUp, dPadDown, dPadLeft, dPadRight, id, index, gamepad, xboxOne } = props
    this.Xbox360Pad = new BABYLON.Xbox360Pad(id, index, gamepad, xboxOne)
    this.Xbox360Pad.onButtonDownObservable = onButtonDownObservable
    this.Xbox360Pad.onButtonUpObservable = onButtonUpObservable
    this.Xbox360Pad.onPadDownObservable = onPadDownObservable
    this.Xbox360Pad.onPadUpObservable = onPadUpObservable
    this.Xbox360Pad.leftTrigger = leftTrigger
    this.Xbox360Pad.rightTrigger = rightTrigger
    this.Xbox360Pad.buttonA = buttonA
    this.Xbox360Pad.buttonB = buttonB
    this.Xbox360Pad.buttonX = buttonX
    this.Xbox360Pad.buttonY = buttonY
    this.Xbox360Pad.buttonStart = buttonStart
    this.Xbox360Pad.buttonBack = buttonBack
    this.Xbox360Pad.buttonLB = buttonLB
    this.Xbox360Pad.buttonRB = buttonRB
    this.Xbox360Pad.buttonLeftStick = buttonLeftStick
    this.Xbox360Pad.buttonRightStick = buttonRightStick
    this.Xbox360Pad.dPadUp = dPadUp
    this.Xbox360Pad.dPadDown = dPadDown
    this.Xbox360Pad.dPadLeft = dPadLeft
    this.Xbox360Pad.dPadRight = dPadRight
  }

  render () {
    return null
  }
}

export default Xbox360Pad

