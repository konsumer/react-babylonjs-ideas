import React from 'react'

class Color4 extends React.Component {
  constructor (props) {
    super(props)
    const { r, g, b, a } = props
    this.Color4 = new Color4(r, g, b, a)
  }

  render () {
    return null
  }
}

export default Color4

