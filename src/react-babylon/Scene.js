import React, { createContext } from 'react'
import BABYLON from 'babylonjs'

import { withEngine } from './Engine'

export const { Provider, Consumer } = createContext({})

export const withScene = Component => props => (
  <Consumer>{scene => <Component scene={scene} {...props} />}</Consumer>
)

class Scene extends React.Component {
  componentWillMount () {
    this.scene = new BABYLON.Scene(this.props.engine)
    this.forceUpdate()
  }

  render () {
    return <Provider value={this.scene}>{this.props.children || null}</Provider>
  }
}

export default withEngine(Scene)
