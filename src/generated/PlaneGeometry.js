import React from 'react'

class PlaneGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { size, side } = props
    this.PlaneGeometry = new PlaneGeometry(size, side)
  }

  render () {
    return null
  }
}

export default PlaneGeometry

