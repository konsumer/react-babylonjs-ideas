import React from 'react'

class Size extends React.Component {
  constructor (props) {
    super(props)
    const { width, height, surface } = props
    this.Size = new Size(width, height, surface)
  }

  render () {
    return null
  }
}

export default Size

