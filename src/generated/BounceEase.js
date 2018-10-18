import React from 'react'

class BounceEase extends React.Component {
  constructor (props) {
    super(props)
    const { bounces, bounciness } = props
    this.BounceEase = new BounceEase(bounces, bounciness)
  }

  render () {
    return null
  }
}

export default BounceEase

