import React from 'react'
import { withScene } from './Scene'

class ProceduralTextureSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.ProceduralTextureSceneComponent = new ProceduralTextureSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(ProceduralTextureSceneComponent)

