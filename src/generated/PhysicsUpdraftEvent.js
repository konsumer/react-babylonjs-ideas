import React from 'react'

class PhysicsUpdraftEvent extends React.Component {
  constructor (props) {
    super(props)
    const { getImpostorForceAndContactPoint } = props
    this.PhysicsUpdraftEvent = new PhysicsUpdraftEvent(getImpostorForceAndContactPoint)
  }

  render () {
    return null
  }
}

export default PhysicsUpdraftEvent

