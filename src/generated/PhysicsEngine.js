import React from 'react'

class PhysicsEngine extends React.Component {
  constructor (props) {
    super(props)
    const { gravity } = props
    this.PhysicsEngine = new PhysicsEngine(gravity)
  }

  render () {
    return null
  }
}

export default PhysicsEngine

