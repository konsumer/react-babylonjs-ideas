import React from 'react'

class SkeletonViewer extends React.Component {
  constructor (props) {
    super(props)
    const { skeleton, mesh, autoUpdateBonesMatrices, renderingGroupId, color, isEnabled } = props
    this.SkeletonViewer = new SkeletonViewer(skeleton, mesh, autoUpdateBonesMatrices, renderingGroupId, color, isEnabled)
  }

  render () {
    return null
  }
}

export default SkeletonViewer

