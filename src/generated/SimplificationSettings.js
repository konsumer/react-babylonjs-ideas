import React from 'react'

class SimplificationSettings extends React.Component {
  constructor (props) {
    super(props)
    const { quality, distance, optimizeMesh } = props
    this.SimplificationSettings = new SimplificationSettings(quality, distance, optimizeMesh)
  }

  render () {
    return null
  }
}

export default SimplificationSettings

