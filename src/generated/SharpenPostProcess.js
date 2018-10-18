import React from 'react'

class SharpenPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { colorAmount, edgeAmount } = props
    this.SharpenPostProcess = new SharpenPostProcess(colorAmount, edgeAmount)
  }

  render () {
    return null
  }
}

export default SharpenPostProcess

