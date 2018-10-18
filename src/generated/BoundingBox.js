import React from 'react'

class BoundingBox extends React.Component {
  constructor (props) {
    super(props)
    const { vectors, center, centerWorld, extendSize, extendSizeWorld, directions, vectorsWorld, minimumWorld, maximumWorld, minimum, maximum } = props
    this.BoundingBox = new BoundingBox(vectors, center, centerWorld, extendSize, extendSizeWorld, directions, vectorsWorld, minimumWorld, maximumWorld, minimum, maximum)
  }

  render () {
    return null
  }
}

export default BoundingBox

