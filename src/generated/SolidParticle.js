import React from 'react'
import BABYLON from 'babylonjs'

class SolidParticle extends React.Component {
  constructor (props) {
    super(props)
    const { idx, color, position, rotation, rotationQuaternion, scaling, uvs, velocity, pivot, translateFromPivot, alive, isVisible, shapeId, idxInShape, parentId, scale, quaternion, particleIndex, positionIndex, indiceIndex, model, shapeId, idxInShape, sps, modelBoundingInfo } = props
    this.SolidParticle = new BABYLON.SolidParticle(particleIndex, positionIndex, indiceIndex, model, shapeId, idxInShape, sps, modelBoundingInfo)
    this.SolidParticle.idx = idx
    this.SolidParticle.color = color
    this.SolidParticle.position = position
    this.SolidParticle.rotation = rotation
    this.SolidParticle.rotationQuaternion = rotationQuaternion
    this.SolidParticle.scaling = scaling
    this.SolidParticle.uvs = uvs
    this.SolidParticle.velocity = velocity
    this.SolidParticle.pivot = pivot
    this.SolidParticle.translateFromPivot = translateFromPivot
    this.SolidParticle.alive = alive
    this.SolidParticle.isVisible = isVisible
    this.SolidParticle.shapeId = shapeId
    this.SolidParticle.idxInShape = idxInShape
    this.SolidParticle.parentId = parentId
    this.SolidParticle.scale = scale
    this.SolidParticle.quaternion = quaternion
  }

  render () {
    return null
  }
}

export default SolidParticle

