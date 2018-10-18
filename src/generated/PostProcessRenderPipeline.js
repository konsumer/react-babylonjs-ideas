import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class PostProcessRenderPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { engine, isSupported, engine, name } = props
    this.PostProcessRenderPipeline = new BABYLON.PostProcessRenderPipeline(engine, name)
    this.PostProcessRenderPipeline.engine = engine
    this.PostProcessRenderPipeline.isSupported = isSupported
  }

  render () {
    return null
  }
}

export default withEngine(PostProcessRenderPipeline)

