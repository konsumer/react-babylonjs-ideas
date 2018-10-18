import React from 'react'

class CSG extends React.Component {
  constructor (props) {
    super(props)
    const { polygons, matrix, position, rotation, rotationQuaternion, scaling } = props
    this.CSG = new CSG(polygons, matrix, position, rotation, rotationQuaternion, scaling)
  }

  render () {
    return null
  }
}

export default CSG

