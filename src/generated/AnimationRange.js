import React from 'react'
import BABYLON from 'babylonjs'

class AnimationRange extends React.Component {
  constructor (props) {
    super(props)
    const { name, from, to, name, from, to } = props
    this.AnimationRange = new BABYLON.AnimationRange(name, from, to)
    this.AnimationRange.name = name
    this.AnimationRange.from = from
    this.AnimationRange.to = to
  }

  render () {
    return null
  }
}

export default AnimationRange

