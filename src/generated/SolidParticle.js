import React from 'react'

class SolidParticle extends React.Component {
  constructor (props) {
    super(props)
    const { idx, color, position, rotation, rotationQuaternion, scaling, uvs, velocity, pivot, translateFromPivot, alive, isVisible, shapeId, idxInShape, parentId, scale, quaternion } = props
    this.SolidParticle = new SolidParticle(idx, color, position, rotation, rotationQuaternion, scaling, uvs, velocity, pivot, translateFromPivot, alive, isVisible, shapeId, idxInShape, parentId, scale, quaternion)
  }

  render () {
    return null
  }
}

export default SolidParticle

