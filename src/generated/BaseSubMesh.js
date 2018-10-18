import React from 'react'
import BABYLON from 'babylonjs'

class BaseSubMesh extends React.Component {
  constructor (props) {
    super(props)
    const { effect } = props
    this.BaseSubMesh = new BABYLON.BaseSubMesh()
    this.BaseSubMesh.effect = effect
  }

  render () {
    return null
  }
}

export default BaseSubMesh

