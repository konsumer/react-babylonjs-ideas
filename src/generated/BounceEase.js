import React from 'react'
import BABYLON from 'babylonjs'

class BounceEase extends React.Component {
  constructor (props) {
    super(props)
    const { bounces, bounciness, bounces, bounciness } = props
    this.BounceEase = new BABYLON.BounceEase(bounces, bounciness)
    this.BounceEase.bounces = bounces
    this.BounceEase.bounciness = bounciness
  }

  render () {
    return null
  }
}

export default BounceEase

