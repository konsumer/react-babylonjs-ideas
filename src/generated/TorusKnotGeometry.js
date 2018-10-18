import React from 'react'

class TorusKnotGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { radius, tube, radialSegments, tubularSegments, p, q, side } = props
    this.TorusKnotGeometry = new TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, side)
  }

  render () {
    return null
  }
}

export default TorusKnotGeometry

