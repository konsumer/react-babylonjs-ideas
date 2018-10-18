import React from 'react'
import { withScene } from './Scene'

class SimplicationQueueSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene } = props
    this.SimplicationQueueSceneComponent = new SimplicationQueueSceneComponent(name, scene)
  }

  render () {
    return null
  }
}

export default withScene(SimplicationQueueSceneComponent)

