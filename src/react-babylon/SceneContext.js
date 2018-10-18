import React, { createContext } from 'react'

export const SceneContext = createContext({})
export default SceneContext

export const SceneProvider = SceneContext.Provider
export const SceneConsumer = SceneContext.Consumer

/**
 * HOC to give your component access to current parent scene
 */
export const withScene = Component => props => (
  <SceneConsumer>
    {({ scene }) => {
      return <Component {...props} scene={scene} />
    }}
  </SceneConsumer>
)
