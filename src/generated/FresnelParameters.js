import React from 'react'

class FresnelParameters extends React.Component {
  constructor (props) {
    super(props)
    const { isEnabled, leftColor, rightColor, bias, power } = props
    this.FresnelParameters = new FresnelParameters(isEnabled, leftColor, rightColor, bias, power)
  }

  render () {
    return null
  }
}

export default FresnelParameters

