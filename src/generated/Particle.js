import React from 'react'

class Particle extends React.Component {
  constructor (props) {
    super(props)
    const { particleSystem, id, position, direction, color, colorStep, lifeTime, age, size, scale, angle, angularSpeed, cellIndex, remapData, updateCellInfoFromSystem } = props
    this.Particle = new Particle(particleSystem, id, position, direction, color, colorStep, lifeTime, age, size, scale, angle, angularSpeed, cellIndex, remapData, updateCellInfoFromSystem)
  }

  render () {
    return null
  }
}

export default Particle

