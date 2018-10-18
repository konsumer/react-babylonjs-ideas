import React from 'react'

class PostProcessRenderEffect extends React.Component {
  constructor (props) {
    super(props)
    const { isSupported } = props
    this.PostProcessRenderEffect = new PostProcessRenderEffect(isSupported)
  }

  render () {
    return null
  }
}

export default PostProcessRenderEffect

