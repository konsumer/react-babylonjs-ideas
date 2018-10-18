import React from 'react'

class ParticleSystem extends React.Component {
  constructor (props) {
    super(props)
    const { updateFunction, startDirectionFunction, startPositionFunction, onDisposeObservable, onDispose, useRampGradients, subEmitters, activeSubSystems, particles, recycleParticle } = props
    this.ParticleSystem = new ParticleSystem(updateFunction, startDirectionFunction, startPositionFunction, onDisposeObservable, onDispose, useRampGradients, subEmitters, activeSubSystems, particles, recycleParticle)
  }

  render () {
    return null
  }
}

export default ParticleSystem

