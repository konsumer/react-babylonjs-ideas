import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ReflectionProbe extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, samples, refreshRate, cubeTexture, renderList, name, size, scene, generateMipMaps, useFloat } = props
    this.ReflectionProbe = new BABYLON.ReflectionProbe(name, size, scene, generateMipMaps, useFloat)
    this.ReflectionProbe.name = name
    this.ReflectionProbe.position = position
    this.ReflectionProbe.samples = samples
    this.ReflectionProbe.refreshRate = refreshRate
    this.ReflectionProbe.cubeTexture = cubeTexture
    this.ReflectionProbe.renderList = renderList
  }

  render () {
    return null
  }
}

export default withScene(ReflectionProbe)

