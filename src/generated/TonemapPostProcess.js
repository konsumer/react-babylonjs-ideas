import React from 'react'

class TonemapPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { exposureAdjustment } = props
    this.TonemapPostProcess = new TonemapPostProcess(exposureAdjustment)
  }

  render () {
    return null
  }
}

export default TonemapPostProcess

