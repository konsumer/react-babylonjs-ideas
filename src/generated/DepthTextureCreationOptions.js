import React from 'react'

class DepthTextureCreationOptions extends React.Component {
  constructor (props) {
    super(props)
    const { generateStencil, bilinearFiltering, comparisonFunction, isCube } = props
    this.DepthTextureCreationOptions = new DepthTextureCreationOptions(generateStencil, bilinearFiltering, comparisonFunction, isCube)
  }

  render () {
    return null
  }
}

export default DepthTextureCreationOptions

