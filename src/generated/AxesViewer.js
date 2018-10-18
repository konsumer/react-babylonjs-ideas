import React from 'react'
import { withScene } from './Scene'

class AxesViewer extends React.Component {
  constructor (props) {
    super(props)
    const { scene, scaleLines } = props
    this.AxesViewer = new AxesViewer(scene, scaleLines)
  }

  render () {
    return null
  }
}

export default withScene(AxesViewer)

