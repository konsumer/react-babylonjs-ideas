import React from 'react'

class PowerEase extends React.Component {
  constructor (props) {
    super(props)
    const { power } = props
    this.PowerEase = new PowerEase(power)
  }

  render () {
    return null
  }
}

export default PowerEase

