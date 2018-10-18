import React from 'react'
import { withScene } from './Scene'

class LensFlareSystemSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.LensFlareSystemSceneComponent = new LensFlareSystemSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(LensFlareSystemSceneComponent)

