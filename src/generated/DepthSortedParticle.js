import React from 'react'
import BABYLON from 'babylonjs'

class DepthSortedParticle extends React.Component {
  constructor (props) {
    super(props)
    const { ind, indicesLength, sqDistance } = props
    this.DepthSortedParticle = new BABYLON.DepthSortedParticle()
    this.DepthSortedParticle.ind = ind
    this.DepthSortedParticle.indicesLength = indicesLength
    this.DepthSortedParticle.sqDistance = sqDistance
  }

  render () {
    return null
  }
}

export default DepthSortedParticle

