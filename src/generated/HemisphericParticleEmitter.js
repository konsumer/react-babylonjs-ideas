import React from 'react'

class HemisphericParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { radius, radiusRange, directionRandomizer } = props
    this.HemisphericParticleEmitter = new HemisphericParticleEmitter(radius, radiusRange, directionRandomizer)
  }

  render () {
    return null
  }
}

export default HemisphericParticleEmitter

