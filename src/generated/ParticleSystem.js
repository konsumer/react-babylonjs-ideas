import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ParticleSystem extends React.Component {
  constructor (props) {
    super(props)
    const { BILLBOARDMODE_Y, BILLBOARDMODE_ALL, BILLBOARDMODE_STRETCHED, updateFunction, startDirectionFunction, startPositionFunction, onDisposeObservable, onDispose, useRampGradients, subEmitters, activeSubSystems, particles, recycleParticle, name, capacity, scene, customEffect, isAnimationSheetEnabled, epsilon } = props
    this.ParticleSystem = new BABYLON.ParticleSystem(name, capacity, scene, customEffect, isAnimationSheetEnabled, epsilon)
    this.ParticleSystem.BILLBOARDMODE_Y = BILLBOARDMODE_Y
    this.ParticleSystem.BILLBOARDMODE_ALL = BILLBOARDMODE_ALL
    this.ParticleSystem.BILLBOARDMODE_STRETCHED = BILLBOARDMODE_STRETCHED
    this.ParticleSystem.updateFunction = updateFunction
    this.ParticleSystem.startDirectionFunction = startDirectionFunction
    this.ParticleSystem.startPositionFunction = startPositionFunction
    this.ParticleSystem.onDisposeObservable = onDisposeObservable
    this.ParticleSystem.onDispose = onDispose
    this.ParticleSystem.useRampGradients = useRampGradients
    this.ParticleSystem.subEmitters = subEmitters
    this.ParticleSystem.activeSubSystems = activeSubSystems
    this.ParticleSystem.particles = particles
    this.ParticleSystem.recycleParticle = recycleParticle
  }

  render () {
    return null
  }
}

export default withScene(ParticleSystem)

