import React from 'react'

class PhysicsVortexEvent extends React.Component {
  constructor (props) {
    super(props)
    const { getImpostorForceAndContactPoint } = props
    this.PhysicsVortexEvent = new PhysicsVortexEvent(getImpostorForceAndContactPoint)
  }

  render () {
    return null
  }
}

export default PhysicsVortexEvent

