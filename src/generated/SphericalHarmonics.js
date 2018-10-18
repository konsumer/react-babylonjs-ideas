import React from 'react'
import BABYLON from 'babylonjs'

class SphericalHarmonics extends React.Component {
  constructor (props) {
    super(props)
    const { l00, l1_1, l10, l11, l2_2, l2_1, l20, l21, lL22 } = props
    this.SphericalHarmonics = new BABYLON.SphericalHarmonics()
    this.SphericalHarmonics.l00 = l00
    this.SphericalHarmonics.l1_1 = l1_1
    this.SphericalHarmonics.l10 = l10
    this.SphericalHarmonics.l11 = l11
    this.SphericalHarmonics.l2_2 = l2_2
    this.SphericalHarmonics.l2_1 = l2_1
    this.SphericalHarmonics.l20 = l20
    this.SphericalHarmonics.l21 = l21
    this.SphericalHarmonics.lL22 = lL22
  }

  render () {
    return null
  }
}

export default SphericalHarmonics

