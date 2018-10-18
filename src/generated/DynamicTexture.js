import React from 'react'

class DynamicTexture extends React.Component {
  constructor (props) {
    super(props)
    const { canRescale } = props
    this.DynamicTexture = new DynamicTexture(canRescale)
  }

  render () {
    return null
  }
}

export default DynamicTexture

