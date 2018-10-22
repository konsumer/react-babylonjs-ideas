import React, { Component } from 'react'
import { withScene } from './SceneContext'

class _BeforeRender extends Component {
  state = {
    delta: 0
  }

  defaultProps = {
    handler: delta => {}
  }

  updateDelta = () => {
    this.setState({ delta: Date.now() })
  }

  componentWillMount() {
    this.props.scene.onBeforeRenderObservable.add(this.updateDelta)
  }

  componentWillUnmount() {
    this.props.scene.onBeforeRenderObservable.remove(this.updateDelta)
  }

  render() {
    return this.props.children(this.props.handler(this.state.delta))
  }
}

export const BeforeRender = withScene(_BeforeRender)
export default BeforeRender

export const withBeforeRender = handler => Component => props => {
  return (
    <BeforeRender handler={handler}>
      {newProps => <Component {...props} {...newProps} />}
    </BeforeRender>
  )
}
