import React from 'react'

class PointerInfoBase extends React.Component {
  constructor (props) {
    super(props)
    const { type, event } = props
    this.PointerInfoBase = new PointerInfoBase(type, event)
  }

  render () {
    return null
  }
}

export default PointerInfoBase

