import React from 'react'
import { withEngine } from './Engine'

class PostProcessRenderPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { engine, isSupported } = props
    this.PostProcessRenderPipeline = new PostProcessRenderPipeline(engine, isSupported)
  }

  render () {
    return null
  }
}

export default withEngine(PostProcessRenderPipeline)

