import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class Buffer extends React.Component {
  constructor (props) {
    super(props)
    const { byteStride, engine, data, updatable, stride, postponeInternalCreation, instanced, useBytes } = props
    this.Buffer = new BABYLON.Buffer(engine, data, updatable, stride, postponeInternalCreation, instanced, useBytes)
    this.Buffer.byteStride = byteStride
  }

  render () {
    return null
  }
}

export default withEngine(Buffer)

