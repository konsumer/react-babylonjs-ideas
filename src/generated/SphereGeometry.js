import React from 'react'

class SphereGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { segments, diameter, side } = props
    this.SphereGeometry = new SphereGeometry(segments, diameter, side)
  }

  render () {
    return null
  }
}

export default SphereGeometry

