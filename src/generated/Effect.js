import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class Effect extends React.Component {
  constructor (props) {
    super(props)
    const { name, defines, onCompiled, onError, onBind, uniqueId, onCompileObservable, onErrorObservable, onBindObservable, key, isSupported, ShadersStore, IncludesShadersStore, baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers, engine, defines, fallbacks, onCompiled, onError, indexParameters } = props
    this.Effect = new BABYLON.Effect(baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers, engine, defines, fallbacks, onCompiled, onError, indexParameters)
    this.Effect.name = name
    this.Effect.defines = defines
    this.Effect.onCompiled = onCompiled
    this.Effect.onError = onError
    this.Effect.onBind = onBind
    this.Effect.uniqueId = uniqueId
    this.Effect.onCompileObservable = onCompileObservable
    this.Effect.onErrorObservable = onErrorObservable
    this.Effect.onBindObservable = onBindObservable
    this.Effect.key = key
    this.Effect.isSupported = isSupported
    this.Effect.ShadersStore = ShadersStore
    this.Effect.IncludesShadersStore = IncludesShadersStore
  }

  render () {
    return null
  }
}

export default withEngine(Effect)

