import React from 'react'
import BABYLON from 'babylonjs'

class CollideWorker extends React.Component {
  constructor (props) {
    super(props)
    const { collider, finalPosition, collisionsScalingMatrix, collisionTranformationMatrix, checkCollision, processCollisionsForSubMeshes, collideForSubMesh, checkSubmeshCollision, collider, _collisionCache, finalPosition } = props
    this.CollideWorker = new BABYLON.CollideWorker(collider, _collisionCache, finalPosition)
    this.CollideWorker.collider = collider
    this.CollideWorker.finalPosition = finalPosition
    this.CollideWorker.collisionsScalingMatrix = collisionsScalingMatrix
    this.CollideWorker.collisionTranformationMatrix = collisionTranformationMatrix
    this.CollideWorker.checkCollision = checkCollision
    this.CollideWorker.processCollisionsForSubMeshes = processCollisionsForSubMeshes
    this.CollideWorker.collideForSubMesh = collideForSubMesh
    this.CollideWorker.checkSubmeshCollision = checkSubmeshCollision
  }

  render () {
    return null
  }
}

export default CollideWorker

