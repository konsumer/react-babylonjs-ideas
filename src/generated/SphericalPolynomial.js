import React from 'react'
import BABYLON from 'babylonjs'

class SphericalPolynomial extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, xx, yy, zz, xy, yz, zx } = props
    this.SphericalPolynomial = new BABYLON.SphericalPolynomial()
    this.SphericalPolynomial.x = x
    this.SphericalPolynomial.y = y
    this.SphericalPolynomial.z = z
    this.SphericalPolynomial.xx = xx
    this.SphericalPolynomial.yy = yy
    this.SphericalPolynomial.zz = zz
    this.SphericalPolynomial.xy = xy
    this.SphericalPolynomial.yz = yz
    this.SphericalPolynomial.zx = zx
  }

  render () {
    return null
  }
}

export default SphericalPolynomial

