import React from 'react'

class Ray extends React.Component {
  constructor (props) {
    super(props)
    const { origin, direction, length } = props
    this.Ray = new Ray(origin, direction, length)
  }

  render () {
    return null
  }
}

export default Ray

