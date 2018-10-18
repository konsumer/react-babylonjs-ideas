import React from 'react'

class Xbox360Pad extends React.Component {
  constructor (props) {
    super(props)
    const { onButtonDownObservable, onButtonUpObservable, onPadDownObservable, onPadUpObservable, leftTrigger, rightTrigger, buttonA, buttonB, buttonX, buttonY, buttonStart, buttonBack, buttonLB, buttonRB, buttonLeftStick, buttonRightStick, dPadUp, dPadDown, dPadLeft, dPadRight } = props
    this.Xbox360Pad = new Xbox360Pad(onButtonDownObservable, onButtonUpObservable, onPadDownObservable, onPadUpObservable, leftTrigger, rightTrigger, buttonA, buttonB, buttonX, buttonY, buttonStart, buttonBack, buttonLB, buttonRB, buttonLeftStick, buttonRightStick, dPadUp, dPadDown, dPadLeft, dPadRight)
  }

  render () {
    return null
  }
}

export default Xbox360Pad

