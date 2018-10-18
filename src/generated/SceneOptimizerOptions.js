import React from 'react'

class SceneOptimizerOptions extends React.Component {
  constructor (props) {
    super(props)
    const { targetFrameRate, trackerDuration, optimizations } = props
    this.SceneOptimizerOptions = new SceneOptimizerOptions(targetFrameRate, trackerDuration, optimizations)
  }

  render () {
    return null
  }
}

export default SceneOptimizerOptions

