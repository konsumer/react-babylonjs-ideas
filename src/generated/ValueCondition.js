import React from 'react'

class ValueCondition extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value, operator } = props
    this.ValueCondition = new ValueCondition(propertyPath, value, operator)
  }

  render () {
    return null
  }
}

export default ValueCondition

