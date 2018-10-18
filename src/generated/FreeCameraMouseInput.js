import React from 'react'

class FreeCameraMouseInput extends React.Component {
  constructor (props) {
    super(props)
    const { touchEnabled, camera, buttons, angularSensibility, previousPosition } = props
    this.FreeCameraMouseInput = new FreeCameraMouseInput(touchEnabled, camera, buttons, angularSensibility, previousPosition)
  }

  render () {
    return null
  }
}

export default FreeCameraMouseInput

