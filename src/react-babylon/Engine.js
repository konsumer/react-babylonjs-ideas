import React, { Component } from 'react'
import BABYLON from 'babylonjs'

import { EngineProvider } from './EngineContext'
import { render, unmount } from './render'

// This could all be done in render, but I want to make it simple to use scene/engine/canvas in normal react ways, with context

// TODO: more engine/canvas options

export class Engine extends Component {
  componentDidMount () {
    this._engine = new BABYLON.Engine(
      this._canvas,
      true
    )
    this._engine.runRenderLoop(() => {
      this._engine.scenes.forEach(scene => {
        scene.render()
      })
    })
    window.addEventListener('resize', this.onResizeWindow)
    const { props, state } = this
    console.log('Engine.componentDidMount', { props, state })
    render(
      <EngineProvider value={{ engine: this._engine, canvas: this._canvas }}>
        {this.props.children}
      </EngineProvider>,
      { engine: this._engine, canvas: this._canvas }
    )
  }

  componentDidUpdate (prevProps, prevState) {
    const { props, state } = this
    console.log('Engine.componentDidUpdate', { props, state, prevProps, prevState })
    render(
      <EngineProvider value={{ engine: this._engine, canvas: this._canvas }}>
        {this.props.children}
      </EngineProvider>,
      { engine: this._engine, canvas: this._canvas }
    )
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow)
    unmount()
  }

  render () {
    return <canvas ref={ref => (this._canvas = ref)} style={{ height: '100%', width: '100%' }} />
  }

  onResizeWindow = () => {
    if (this._engine) {
      this._engine.resize()
    }
  }
}
