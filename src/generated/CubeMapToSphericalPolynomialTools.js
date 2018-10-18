import React from 'react'
import BABYLON from 'babylonjs'

class CubeMapToSphericalPolynomialTools extends React.Component {
  constructor (props) {
    super(props)
    const { FileFaces } = props
    this.CubeMapToSphericalPolynomialTools = new BABYLON.CubeMapToSphericalPolynomialTools()
    this.CubeMapToSphericalPolynomialTools.FileFaces = FileFaces
  }

  render () {
    return null
  }
}

export default CubeMapToSphericalPolynomialTools

