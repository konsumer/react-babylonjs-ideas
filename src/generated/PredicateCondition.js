import React from 'react'
import BABYLON from 'babylonjs'

class PredicateCondition extends React.Component {
  constructor (props) {
    super(props)
    const { predicate, actionManager, predicate } = props
    this.PredicateCondition = new BABYLON.PredicateCondition(actionManager, predicate)
    this.PredicateCondition.predicate = predicate
  }

  render () {
    return null
  }
}

export default PredicateCondition

