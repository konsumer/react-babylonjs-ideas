import React from 'react'

class PolygonMeshBuilder extends React.Component {
  constructor (props) {
    super(props)
    const { addSide } = props
    this.PolygonMeshBuilder = new PolygonMeshBuilder(addSide)
  }

  render () {
    return null
  }
}

export default PolygonMeshBuilder

