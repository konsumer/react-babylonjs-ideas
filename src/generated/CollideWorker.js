import React from 'react'

class CollideWorker extends React.Component {
  constructor (props) {
    super(props)
    const { collider, finalPosition, collisionsScalingMatrix, collisionTranformationMatrix, checkCollision, processCollisionsForSubMeshes, collideForSubMesh, checkSubmeshCollision } = props
    this.CollideWorker = new CollideWorker(collider, finalPosition, collisionsScalingMatrix, collisionTranformationMatrix, checkCollision, processCollisionsForSubMeshes, collideForSubMesh, checkSubmeshCollision)
  }

  render () {
    return null
  }
}

export default CollideWorker

