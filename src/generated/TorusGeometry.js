import React from 'react'

class TorusGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { diameter, thickness, tessellation, side } = props
    this.TorusGeometry = new TorusGeometry(diameter, thickness, tessellation, side)
  }

  render () {
    return null
  }
}

export default TorusGeometry

