import React from 'react'

class GenericPad extends React.Component {
  constructor (props) {
    super(props)
    const { onButtonDownObservable, onButtonUpObservable } = props
    this.GenericPad = new GenericPad(onButtonDownObservable, onButtonUpObservable)
  }

  render () {
    return null
  }
}

export default GenericPad

