import React, { Component } from 'react'
import invariant from 'fbjs/lib/invariant'
import BABYLON from 'babylonjs'

import { withEngine } from './EngineContext'
import { SceneProvider } from './SceneContext'

// This could all be done in render, but I want to make it simple to use scene/engine/canvas in normal react ways, with context

// TODO: more scene-options
// TODO: handle name prop, so it can be grabbed from anywhere in code
// TODO: handle skip prop, so you can load scenes but skip render

class _Scene extends Component {
  componentWillMount () {
    const { engine } = this.props
    invariant(engine, 'Scene requires a parent <Engine>.')
    this._scene = new BABYLON.Scene(engine)
    console.log('Scene', { ...this.props, scene: this._scene })
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
