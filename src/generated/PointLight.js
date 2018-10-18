import React from 'react'

class PointLight extends React.Component {
  constructor (props) {
    super(props)
    const { shadowAngle, direction } = props
    this.PointLight = new PointLight(shadowAngle, direction)
  }

  render () {
    return null
  }
}

export default PointLight

