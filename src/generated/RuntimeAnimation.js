import React from 'react'

class RuntimeAnimation extends React.Component {
  constructor (props) {
    super(props)
    const { currentFrame, weight, currentValue, targetPath, target, animation } = props
    this.RuntimeAnimation = new RuntimeAnimation(currentFrame, weight, currentValue, targetPath, target, animation)
  }

  render () {
    return null
  }
}

export default RuntimeAnimation

