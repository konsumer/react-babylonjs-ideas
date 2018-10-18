import React from 'react'

class RawTexture extends React.Component {
  constructor (props) {
    super(props)
    const { format } = props
    this.RawTexture = new RawTexture(format)
  }

  render () {
    return null
  }
}

export default RawTexture

