import React from 'react'

class BouncingBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { name, transitionDuration, lowerRadiusTransitionRange, upperRadiusTransitionRange, autoTransitionRange } = props
    this.BouncingBehavior = new BouncingBehavior(name, transitionDuration, lowerRadiusTransitionRange, upperRadiusTransitionRange, autoTransitionRange)
  }

  render () {
    return null
  }
}

export default BouncingBehavior

