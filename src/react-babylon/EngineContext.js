import React, { createContext } from 'react'

export const EngineContext = createContext({})
export default EngineContext

export const EngineProvider = EngineContext.Provider
export const EngineConsumer = EngineContext.Consumer

/**
 * HOC to give your component access to BabylonJS engine
 */
export const withEngine = Component => props => (
  <EngineConsumer>
    {({ engine }) => {
      return <Component {...props} engine={engine} />
    }}
  </EngineConsumer>
)

/**
 * HOC to give your component access to current canvas
 */
export const withCanvas = Component => props => (
  <EngineConsumer>
    {({ canvas }) => {
      return <Component {...props} canvas={canvas} />
    }}
  </EngineConsumer>
)
