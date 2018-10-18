import React from 'react'

class Viewport extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, width, height } = props
    this.Viewport = new Viewport(x, y, width, height)
  }

  render () {
    return null
  }
}

export default Viewport

