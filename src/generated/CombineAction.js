import React from 'react'

class CombineAction extends React.Component {
  constructor (props) {
    super(props)
    const { children } = props
    this.CombineAction = new CombineAction(children)
  }

  render () {
    return null
  }
}

export default CombineAction

