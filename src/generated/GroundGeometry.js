import React from 'react'

class GroundGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { width, height, subdivisions } = props
    this.GroundGeometry = new GroundGeometry(width, height, subdivisions)
  }

  render () {
    return null
  }
}

export default GroundGeometry

