import React from 'react'
import { withScene } from './Scene'

class AssetContainer extends React.Component {
  constructor (props) {
    super(props)
    const { scene } = props
    this.AssetContainer = new AssetContainer(scene)
  }

  render () {
    return null
  }
}

export default withScene(AssetContainer)

