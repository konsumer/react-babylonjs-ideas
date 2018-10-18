import React from 'react'
import BABYLON from 'babylonjs'

class PhysicsImpostor extends React.Component {
  constructor (props) {
    super(props)
    const { object, type, DEFAULT_OBJECT_SIZE, IDENTITY_QUATERNION, isDisposed, mass, friction, restitution, uniqueId, physicsBody, parent, beforeStep, afterStep, onCollideEvent, onCollide, NoImpostor, SphereImpostor, BoxImpostor, PlaneImpostor, MeshImpostor, CylinderImpostor, ParticleImpostor, HeightmapImpostor, object, type, _options, _scene } = props
    this.PhysicsImpostor = new BABYLON.PhysicsImpostor(object, type, _options, _scene)
    this.PhysicsImpostor.object = object
    this.PhysicsImpostor.type = type
    this.PhysicsImpostor.DEFAULT_OBJECT_SIZE = DEFAULT_OBJECT_SIZE
    this.PhysicsImpostor.IDENTITY_QUATERNION = IDENTITY_QUATERNION
    this.PhysicsImpostor.isDisposed = isDisposed
    this.PhysicsImpostor.mass = mass
    this.PhysicsImpostor.friction = friction
    this.PhysicsImpostor.restitution = restitution
    this.PhysicsImpostor.uniqueId = uniqueId
    this.PhysicsImpostor.physicsBody = physicsBody
    this.PhysicsImpostor.parent = parent
    this.PhysicsImpostor.beforeStep = beforeStep
    this.PhysicsImpostor.afterStep = afterStep
    this.PhysicsImpostor.onCollideEvent = onCollideEvent
    this.PhysicsImpostor.onCollide = onCollide
    this.PhysicsImpostor.NoImpostor = NoImpostor
    this.PhysicsImpostor.SphereImpostor = SphereImpostor
    this.PhysicsImpostor.BoxImpostor = BoxImpostor
    this.PhysicsImpostor.PlaneImpostor = PlaneImpostor
    this.PhysicsImpostor.MeshImpostor = MeshImpostor
    this.PhysicsImpostor.CylinderImpostor = CylinderImpostor
    this.PhysicsImpostor.ParticleImpostor = ParticleImpostor
    this.PhysicsImpostor.HeightmapImpostor = HeightmapImpostor
  }

  render () {
    return null
  }
}

export default PhysicsImpostor

