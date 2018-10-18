import React from 'react'

class PathCursor extends React.Component {
  constructor (props) {
    super(props)
    const { path, value, animations, ensureLimits, raiseOnChange } = props
    this.PathCursor = new PathCursor(path, value, animations, ensureLimits, raiseOnChange)
  }

  render () {
    return null
  }
}

export default PathCursor

