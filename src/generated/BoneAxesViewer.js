import React from 'react'

class BoneAxesViewer extends React.Component {
  constructor (props) {
    super(props)
    const { mesh, bone, pos, xaxis, yaxis, zaxis } = props
    this.BoneAxesViewer = new BoneAxesViewer(mesh, bone, pos, xaxis, yaxis, zaxis)
  }

  render () {
    return null
  }
}

export default BoneAxesViewer

