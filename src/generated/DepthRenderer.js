import React from 'react'

class DepthRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { useOnlyInActiveCamera } = props
    this.DepthRenderer = new DepthRenderer(useOnlyInActiveCamera)
  }

  render () {
    return null
  }
}

export default DepthRenderer

