import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PostProcessManager extends React.Component {
  constructor (props) {
    super(props)
    const { scene } = props
    this.PostProcessManager = new BABYLON.PostProcessManager(scene)
    
  }

  render () {
    return null
  }
}

export default withScene(PostProcessManager)

