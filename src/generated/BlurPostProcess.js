import React from 'react'

class BlurPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { direction, blockCompilation, kernel, packedFloat } = props
    this.BlurPostProcess = new BlurPostProcess(direction, blockCompilation, kernel, packedFloat)
  }

  render () {
    return null
  }
}

export default BlurPostProcess

