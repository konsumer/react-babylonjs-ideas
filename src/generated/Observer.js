import React from 'react'

class Observer extends React.Component {
  constructor (props) {
    super(props)
    const { callback, mask, scope, unregisterOnNextCall } = props
    this.Observer = new Observer(callback, mask, scope, unregisterOnNextCall)
  }

  render () {
    return null
  }
}

export default Observer

