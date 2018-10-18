import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SolidParticleSystem extends React.Component {
  constructor (props) {
    super(props)
    const { particles, nbParticles, billboard, recomputeNormals, counter, name, mesh, vars, pickedParticles, depthSortedParticles, isAlwaysVisible, isVisibilityBoxLocked, computeParticleRotation, computeParticleColor, computeParticleTexture, computeParticleVertex, computeBoundingBox, depthSortParticles, name, scene, options } = props
    this.SolidParticleSystem = new BABYLON.SolidParticleSystem(name, scene, options)
    this.SolidParticleSystem.particles = particles
    this.SolidParticleSystem.nbParticles = nbParticles
    this.SolidParticleSystem.billboard = billboard
    this.SolidParticleSystem.recomputeNormals = recomputeNormals
    this.SolidParticleSystem.counter = counter
    this.SolidParticleSystem.name = name
    this.SolidParticleSystem.mesh = mesh
    this.SolidParticleSystem.vars = vars
    this.SolidParticleSystem.pickedParticles = pickedParticles
    this.SolidParticleSystem.depthSortedParticles = depthSortedParticles
    this.SolidParticleSystem.isAlwaysVisible = isAlwaysVisible
    this.SolidParticleSystem.isVisibilityBoxLocked = isVisibilityBoxLocked
    this.SolidParticleSystem.computeParticleRotation = computeParticleRotation
    this.SolidParticleSystem.computeParticleColor = computeParticleColor
    this.SolidParticleSystem.computeParticleTexture = computeParticleTexture
    this.SolidParticleSystem.computeParticleVertex = computeParticleVertex
    this.SolidParticleSystem.computeBoundingBox = computeBoundingBox
    this.SolidParticleSystem.depthSortParticles = depthSortParticles
  }

  render () {
    return null
  }
}

export default withScene(SolidParticleSystem)

