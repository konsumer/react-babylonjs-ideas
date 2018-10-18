import React from 'react'

class EdgesRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { edgesWidthScalerForOrthographic, edgesWidthScalerForPerspective, isEnabled } = props
    this.EdgesRenderer = new EdgesRenderer(edgesWidthScalerForOrthographic, edgesWidthScalerForPerspective, isEnabled)
  }

  render () {
    return null
  }
}

export default EdgesRenderer

