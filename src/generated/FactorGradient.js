import React from 'react'

class FactorGradient extends React.Component {
  constructor (props) {
    super(props)
    const { gradient, factor1, factor2 } = props
    this.FactorGradient = new FactorGradient(gradient, factor1, factor2)
  }

  render () {
    return null
  }
}

export default FactorGradient

