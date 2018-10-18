import React from 'react'

class Vector2 extends React.Component {
  constructor (props) {
    super(props)
    const { x, y } = props
    this.Vector2 = new Vector2(x, y)
  }

  render () {
    return null
  }
}

export default Vector2

