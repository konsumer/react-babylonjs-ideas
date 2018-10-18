import React from 'react'

class ExponentialEase extends React.Component {
  constructor (props) {
    super(props)
    const { exponent } = props
    this.ExponentialEase = new ExponentialEase(exponent)
  }

  render () {
    return null
  }
}

export default ExponentialEase

