import React from 'react'

class Plane extends React.Component {
  constructor (props) {
    super(props)
    const { normal, d } = props
    this.Plane = new Plane(normal, d)
  }

  render () {
    return null
  }
}

export default Plane

