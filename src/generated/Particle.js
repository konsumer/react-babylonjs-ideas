import React from 'react'
import BABYLON from 'babylonjs'

class Particle extends React.Component {
  constructor (props) {
    super(props)
    const { particleSystem, id, position, direction, color, colorStep, lifeTime, age, size, scale, angle, angularSpeed, cellIndex, remapData, updateCellInfoFromSystem, particleSystem } = props
    this.Particle = new BABYLON.Particle(particleSystem)
    this.Particle.particleSystem = particleSystem
    this.Particle.id = id
    this.Particle.position = position
    this.Particle.direction = direction
    this.Particle.color = color
    this.Particle.colorStep = colorStep
    this.Particle.lifeTime = lifeTime
    this.Particle.age = age
    this.Particle.size = size
    this.Particle.scale = scale
    this.Particle.angle = angle
    this.Particle.angularSpeed = angularSpeed
    this.Particle.cellIndex = cellIndex
    this.Particle.remapData = remapData
    this.Particle.updateCellInfoFromSystem = updateCellInfoFromSystem
  }

  render () {
    return null
  }
}

export default Particle

