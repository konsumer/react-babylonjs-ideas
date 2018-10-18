import React from 'react'

class CylinderGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { height, diameterTop, diameterBottom, tessellation, subdivisions, side } = props
    this.CylinderGeometry = new CylinderGeometry(height, diameterTop, diameterBottom, tessellation, subdivisions, side)
  }

  render () {
    return null
  }
}

export default CylinderGeometry

