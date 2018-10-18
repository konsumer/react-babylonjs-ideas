import React from 'react'

class IncrementValueAction extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value } = props
    this.IncrementValueAction = new IncrementValueAction(propertyPath, value)
  }

  render () {
    return null
  }
}

export default IncrementValueAction

