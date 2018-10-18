import React from 'react'

class SubEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { particleSystem, type, inheritDirection, inheritedVelocityAmount } = props
    this.SubEmitter = new SubEmitter(particleSystem, type, inheritDirection, inheritedVelocityAmount)
  }

  render () {
    return null
  }
}

export default SubEmitter

