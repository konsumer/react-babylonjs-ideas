import React from 'react'

class TargetedAnimation extends React.Component {
  constructor (props) {
    super(props)
    const { animation, target } = props
    this.TargetedAnimation = new TargetedAnimation(animation, target)
  }

  render () {
    return null
  }
}

export default TargetedAnimation

