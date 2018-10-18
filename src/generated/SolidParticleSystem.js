import React from 'react'

class SolidParticleSystem extends React.Component {
  constructor (props) {
    super(props)
    const { particles, nbParticles, billboard, recomputeNormals, counter, name, mesh, vars, pickedParticles, depthSortedParticles, isAlwaysVisible, isVisibilityBoxLocked, computeParticleRotation, computeParticleColor, computeParticleTexture, computeParticleVertex, computeBoundingBox, depthSortParticles } = props
    this.SolidParticleSystem = new SolidParticleSystem(particles, nbParticles, billboard, recomputeNormals, counter, name, mesh, vars, pickedParticles, depthSortedParticles, isAlwaysVisible, isVisibilityBoxLocked, computeParticleRotation, computeParticleColor, computeParticleTexture, computeParticleVertex, computeBoundingBox, depthSortParticles)
  }

  render () {
    return null
  }
}

export default SolidParticleSystem

