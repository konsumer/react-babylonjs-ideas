import React from 'react'

class InterpolateValueAction extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value, duration, stopOtherAnimations, onInterpolationDone, onInterpolationDoneObservable } = props
    this.InterpolateValueAction = new InterpolateValueAction(propertyPath, value, duration, stopOtherAnimations, onInterpolationDone, onInterpolationDoneObservable)
  }

  render () {
    return null
  }
}

export default InterpolateValueAction

