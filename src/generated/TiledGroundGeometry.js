import React from 'react'

class TiledGroundGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { xmin, zmin, xmax, zmax, subdivisions, precision } = props
    this.TiledGroundGeometry = new TiledGroundGeometry(xmin, zmin, xmax, zmax, subdivisions, precision)
  }

  render () {
    return null
  }
}

export default TiledGroundGeometry

