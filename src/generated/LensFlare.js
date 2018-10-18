import React from 'react'

class LensFlare extends React.Component {
  constructor (props) {
    super(props)
    const { size, position, color, texture, alphaMode } = props
    this.LensFlare = new LensFlare(size, position, color, texture, alphaMode)
  }

  render () {
    return null
  }
}

export default LensFlare

