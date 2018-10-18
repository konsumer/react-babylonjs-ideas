
import React, { Fragment, Component, createContext } from 'react'
import BABYLON from 'babylonjs'

export const { Provider, Consumer } = createContext({})
export const withEngine = Component => props => (
  <Consumer>
    {({ engine, canvas }) => {
      return <Component engine={engine} {...props} />
    }}
  </Consumer>
)
export const withCanvas = Component => props => (
  <Consumer>
    {({ engine, canvas }) => {
      return <Component canvas={canvas} {...props} />
    }}
  </Consumer>
)

export default class Engine extends Component {
  state = {
    canvas: null,
    engine: null
  }

  onCanvasLoaded = canvas => {
    if (canvas) {
      canvas.addEventListener('resize', this.onResizeWindow)
      const engine = new BABYLON.Engine(
        canvas,
        true,
        this.props.engineOptions,
        this.props.adaptToDeviceRatio
      )
      engine.runRenderLoop(() => {
        engine.scenes.forEach(scene => {
          scene.render()
        })
      })
      this.setState({ engine, canvas })
      if (process.env.NODE_ENV === 'development') {
        console.log('Engine', { canvas, engine, ...this.props })
      }
    }
  }

  onResizeWindow = () => {
    if (this.state.engine) {
      this.state.engine.resize()
    }
  }

  componentWillUnmount () {
    if (this.canvas) {
      this.canvas.removeEventListener('resize', this.onResizeWindow)
    }
  }

  render () {
    const { width, height, children = null } = this.props
    const opts = {}
    if (width !== undefined && height !== undefined) {
      opts.width = width
      opts.height = height
    }
    return (
      <Fragment>
        <canvas {...opts} ref={this.onCanvasLoaded} />
        {this.state.engine && (
          <Provider
            value={{ engine: this.state.engine, canvas: this.state.canvas }}
          >
            {children}
          </Provider>
        )}
      </Fragment>
    )
  }
}
