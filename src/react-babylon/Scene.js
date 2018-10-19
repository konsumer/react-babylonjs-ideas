import React, { Component } from 'react'
import invariant from 'fbjs/lib/invariant'
import BABYLON from 'babylonjs'

import { withEngine } from './EngineContext'
import { SceneProvider } from './SceneContext'

// This could all be done in render, but I want to make it simple to use scene/engine/canvas in normal react ways, with context

// TODO: handle skip prop, so you can load scenes but skip render
// TODO: work out shadows

class _Scene extends Component {
  componentWillMount () {
    const { engine, ...options } = this.props
    invariant(engine, 'Scene requires a parent <Engine>.')
    this._scene = new BABYLON.Scene(engine)
    console.log('Scene', { ...this.props, scene: this._scene })
    Object.keys(options).forEach(o => {
      this._scene[o] = options[o]
    })
  }

  componentWillUnmount () {
    this._scene.dispose()
  }

  render () {
    return (
      <SceneProvider value={{ scene: this._scene }}>
        {React.Children.map(this.props.children, child => React.cloneElement(child, { scene: this._scene })) || null}
      </SceneProvider>
    )
  }
}

export const Scene = withEngine(_Scene)
export default Scene
