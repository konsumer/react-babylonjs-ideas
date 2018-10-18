import React from 'react'

class BoundingSphere extends React.Component {
  constructor (props) {
    super(props)
    const { center, radius, centerWorld, radiusWorld, minimum, maximum } = props
    this.BoundingSphere = new BoundingSphere(center, radius, centerWorld, radiusWorld, minimum, maximum)
  }

  render () {
    return null
  }
}

export default BoundingSphere

