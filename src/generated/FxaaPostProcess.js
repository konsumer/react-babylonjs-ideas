import React from 'react'

class FxaaPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { texelWidth, texelHeight } = props
    this.FxaaPostProcess = new FxaaPostProcess(texelWidth, texelHeight)
  }

  render () {
    return null
  }
}

export default FxaaPostProcess

