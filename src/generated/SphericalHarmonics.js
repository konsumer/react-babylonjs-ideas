import React from 'react'

class SphericalHarmonics extends React.Component {
  constructor (props) {
    super(props)
    const { l00, l1_1, l10, l11, l2_2, l2_1, l20, l21, lL22 } = props
    this.SphericalHarmonics = new SphericalHarmonics(l00, l1_1, l10, l11, l2_2, l2_1, l20, l21, lL22)
  }

  render () {
    return null
  }
}

export default SphericalHarmonics

