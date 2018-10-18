import React from 'react'

class FadeInOutBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { delay, fadeInTime, name } = props
    this.FadeInOutBehavior = new FadeInOutBehavior(delay, fadeInTime, name)
  }

  render () {
    return null
  }
}

export default FadeInOutBehavior

