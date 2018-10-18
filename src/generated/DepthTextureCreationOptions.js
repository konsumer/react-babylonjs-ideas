import React from 'react'
import BABYLON from 'babylonjs'

class DepthTextureCreationOptions extends React.Component {
  constructor (props) {
    super(props)
    const { generateStencil, bilinearFiltering, comparisonFunction, isCube } = props
    this.DepthTextureCreationOptions = new BABYLON.DepthTextureCreationOptions()
    this.DepthTextureCreationOptions.generateStencil = generateStencil
    this.DepthTextureCreationOptions.bilinearFiltering = bilinearFiltering
    this.DepthTextureCreationOptions.comparisonFunction = comparisonFunction
    this.DepthTextureCreationOptions.isCube = isCube
  }

  render () {
    return null
  }
}

export default DepthTextureCreationOptions

