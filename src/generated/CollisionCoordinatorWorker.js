import React from 'react'
import BABYLON from 'babylonjs'

class CollisionCoordinatorWorker extends React.Component {
  constructor (props) {
    super(props)
    const { SerializeMesh, SerializeGeometry, onMeshUpdated, onGeometryUpdated } = props
    this.CollisionCoordinatorWorker = new BABYLON.CollisionCoordinatorWorker()
    this.CollisionCoordinatorWorker.SerializeMesh = SerializeMesh
    this.CollisionCoordinatorWorker.SerializeGeometry = SerializeGeometry
    this.CollisionCoordinatorWorker.onMeshUpdated = onMeshUpdated
    this.CollisionCoordinatorWorker.onGeometryUpdated = onGeometryUpdated
  }

  render () {
    return null
  }
}

export default CollisionCoordinatorWorker

