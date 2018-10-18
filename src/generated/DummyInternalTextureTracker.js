import React from 'react'

class DummyInternalTextureTracker extends React.Component {
  constructor (props) {
    super(props)
    const { previous, next } = props
    this.DummyInternalTextureTracker = new DummyInternalTextureTracker(previous, next)
  }

  render () {
    return null
  }
}

export default DummyInternalTextureTracker

