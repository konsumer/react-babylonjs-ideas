import React from 'react'
import BABYLON from 'babylonjs'

class Deferred extends React.Component {
  constructor (props) {
    super(props)
    const { promise, resolve, reject } = props
    this.Deferred = new BABYLON.Deferred()
    this.Deferred.promise = promise
    this.Deferred.resolve = resolve
    this.Deferred.reject = reject
  }

  render () {
    return null
  }
}

export default Deferred

