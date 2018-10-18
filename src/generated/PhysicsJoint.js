import React from 'react'

class PhysicsJoint extends React.Component {
  constructor (props) {
    super(props)
    const { type, jointData, physicsJoint, physicsPlugin } = props
    this.PhysicsJoint = new PhysicsJoint(type, jointData, physicsJoint, physicsPlugin)
  }

  render () {
    return null
  }
}

export default PhysicsJoint

