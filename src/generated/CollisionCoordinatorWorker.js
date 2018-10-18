import React from 'react'

class CollisionCoordinatorWorker extends React.Component {
  constructor (props) {
    super(props)
    const { onMeshUpdated, onGeometryUpdated } = props
    this.CollisionCoordinatorWorker = new CollisionCoordinatorWorker(onMeshUpdated, onGeometryUpdated)
  }

  render () {
    return null
  }
}

export default CollisionCoordinatorWorker

