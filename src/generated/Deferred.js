import React from 'react'

class Deferred extends React.Component {
  constructor (props) {
    super(props)
    const { promise, resolve, reject } = props
    this.Deferred = new Deferred(promise, resolve, reject)
  }

  render () {
    return null
  }
}

export default Deferred

