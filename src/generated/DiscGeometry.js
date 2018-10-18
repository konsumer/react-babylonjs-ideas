import React from 'react'

class DiscGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { radius, tessellation, side } = props
    this.DiscGeometry = new DiscGeometry(radius, tessellation, side)
  }

  render () {
    return null
  }
}

export default DiscGeometry

