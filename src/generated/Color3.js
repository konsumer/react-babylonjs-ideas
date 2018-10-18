import React from 'react'

class Color3 extends React.Component {
  constructor (props) {
    super(props)
    const { r, g, b } = props
    this.Color3 = new Color3(r, g, b)
  }

  render () {
    return null
  }
}

export default Color3

