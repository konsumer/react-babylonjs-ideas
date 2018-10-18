import React from 'react'
import { withScene } from './Scene'

class ShadowGeneratorSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.ShadowGeneratorSceneComponent = new ShadowGeneratorSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(ShadowGeneratorSceneComponent)

