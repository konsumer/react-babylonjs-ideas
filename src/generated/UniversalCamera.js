import React from 'react'

class UniversalCamera extends React.Component {
  constructor (props) {
    super(props)
    const { gamepadAngularSensibility, gamepadMoveSensibility } = props
    this.UniversalCamera = new UniversalCamera(gamepadAngularSensibility, gamepadMoveSensibility)
  }

  render () {
    return null
  }
}

export default UniversalCamera

