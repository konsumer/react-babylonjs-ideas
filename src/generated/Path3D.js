import React from 'react'
import BABYLON from 'babylonjs'

class Path3D extends React.Component {
  constructor (props) {
    super(props)
    const { path, path, firstNormal, raw } = props
    this.Path3D = new BABYLON.Path3D(path, firstNormal, raw)
    this.Path3D.path = path
  }

  render () {
    return null
  }
}

export default Path3D

