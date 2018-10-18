import React from 'react'

class DepthSortedParticle extends React.Component {
  constructor (props) {
    super(props)
    const { ind, indicesLength, sqDistance } = props
    this.DepthSortedParticle = new DepthSortedParticle(ind, indicesLength, sqDistance)
  }

  render () {
    return null
  }
}

export default DepthSortedParticle

