import React from 'react'

class MeshLODLevel extends React.Component {
  constructor (props) {
    super(props)
    const { distance, mesh } = props
    this.MeshLODLevel = new MeshLODLevel(distance, mesh)
  }

  render () {
    return null
  }
}

export default MeshLODLevel

