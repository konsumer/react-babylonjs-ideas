import React from 'react'

class SphericalPolynomial extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, xx, yy, zz, xy, yz, zx } = props
    this.SphericalPolynomial = new SphericalPolynomial(x, y, z, xx, yy, zz, xy, yz, zx)
  }

  render () {
    return null
  }
}

export default SphericalPolynomial

