import React from 'react'
import { withScene } from './Scene'

class PostProcessRenderPipelineManagerSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.PostProcessRenderPipelineManagerSceneComponent = new PostProcessRenderPipelineManagerSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(PostProcessRenderPipelineManagerSceneComponent)

