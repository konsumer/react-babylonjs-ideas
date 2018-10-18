import React from 'react'
import BABYLON from 'babylonjs'

class RayHelper extends React.Component {
  constructor (props) {
    super(props)
    const { ray, ray } = props
    this.RayHelper = new BABYLON.RayHelper(ray)
    this.RayHelper.ray = ray
  }

  render () {
    return null
  }
}

export default RayHelper

