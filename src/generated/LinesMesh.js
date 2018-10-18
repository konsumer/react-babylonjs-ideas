import React from 'react'

class LinesMesh extends React.Component {
  constructor (props) {
    super(props)
    const { useVertexColor, useVertexAlpha, color, alpha, intersectionThreshold, material, checkCollisions } = props
    this.LinesMesh = new LinesMesh(useVertexColor, useVertexAlpha, color, alpha, intersectionThreshold, material, checkCollisions)
  }

  render () {
    return null
  }
}

export default LinesMesh

