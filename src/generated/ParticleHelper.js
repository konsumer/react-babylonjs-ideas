import React from 'react'
import BABYLON from 'babylonjs'

class ParticleHelper extends React.Component {
  constructor (props) {
    super(props)
    const { BaseAssetsUrl } = props
    this.ParticleHelper = new BABYLON.ParticleHelper()
    this.ParticleHelper.BaseAssetsUrl = BaseAssetsUrl
  }

  render () {
    return null
  }
}

export default ParticleHelper

