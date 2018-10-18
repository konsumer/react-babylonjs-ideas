import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class PostProcessRenderEffect extends React.Component {
  constructor (props) {
    super(props)
    const { isSupported, engine, name, getPostProcesses, singleInstance } = props
    this.PostProcessRenderEffect = new BABYLON.PostProcessRenderEffect(engine, name, getPostProcesses, singleInstance)
    this.PostProcessRenderEffect.isSupported = isSupported
  }

  render () {
    return null
  }
}

export default withEngine(PostProcessRenderEffect)

