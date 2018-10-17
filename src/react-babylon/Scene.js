import React, { createContext } from 'react'
import { Scene as BabylonScene } from 'babylonjs'

import { withEngine } from './Babylon'

export const { Provider, Consumer } = createContext({})
export const withScene = Component => props => (
  <Consumer>{scene => <Component scene={scene} {...props} />}</Consumer>
)

const Scene = ({ engine, children }) => {
  console.log('Scene', { engine, children })
  return (
    <Provider value={new BabylonScene(engine)}>{children || null}</Provider>
  )
}

export default withEngine(Scene)
