import React, { createContext } from 'react'
import BABYLON from 'babylonjs'

import { withEngine } from './Engine'

export const { Provider, Consumer } = createContext({})
export const withScene = Component => props => (
  <Consumer>{scene => <Component scene={scene} {...props} />}</Consumer>
)

const Scene = ({ engine, children }) => {
  const scene = new BABYLON.Scene(engine)
  if (process.env.NODE_ENV === 'development') {
    console.log('Scene', { scene, engine, children })
  }
  return (
    <Provider value={scene}>{children || null}</Provider>
  )
}

export default withEngine(Scene)
