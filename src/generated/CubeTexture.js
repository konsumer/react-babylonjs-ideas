import React from 'react'

class CubeTexture extends React.Component {
  constructor (props) {
    super(props)
    const { url, boundingBoxPosition, boundingBoxSize, rotationY } = props
    this.CubeTexture = new CubeTexture(url, boundingBoxPosition, boundingBoxSize, rotationY)
  }

  render () {
    return null
  }
}

export default CubeTexture

