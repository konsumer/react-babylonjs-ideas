import React from 'react'

class PhysicsImpostor extends React.Component {
  constructor (props) {
    super(props)
    const { object, type, isDisposed, mass, friction, restitution, uniqueId, physicsBody, parent, beforeStep, afterStep, onCollideEvent, onCollide } = props
    this.PhysicsImpostor = new PhysicsImpostor(object, type, isDisposed, mass, friction, restitution, uniqueId, physicsBody, parent, beforeStep, afterStep, onCollideEvent, onCollide)
  }

  render () {
    return null
  }
}

export default PhysicsImpostor

