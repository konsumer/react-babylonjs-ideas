import React from 'react'

class TouchCamera extends React.Component {
  constructor (props) {
    super(props)
    const { touchAngularSensibility, touchMoveSensibility } = props
    this.TouchCamera = new TouchCamera(touchAngularSensibility, touchMoveSensibility)
  }

  render () {
    return null
  }
}

export default TouchCamera

