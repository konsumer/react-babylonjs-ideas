import React from 'react'

class BoxGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { size, side } = props
    this.BoxGeometry = new BoxGeometry(size, side)
  }

  render () {
    return null
  }
}

export default BoxGeometry

