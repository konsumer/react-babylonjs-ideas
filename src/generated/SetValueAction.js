import React from 'react'

class SetValueAction extends React.Component {
  constructor (props) {
    super(props)
    const { propertyPath, value } = props
    this.SetValueAction = new SetValueAction(propertyPath, value)
  }

  render () {
    return null
  }
}

export default SetValueAction

