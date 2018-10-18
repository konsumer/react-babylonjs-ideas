import React from 'react'

class Matrix extends React.Component {
  constructor (props) {
    super(props)
    const { updateFlag, m } = props
    this.Matrix = new Matrix(updateFlag, m)
  }

  render () {
    return null
  }
}

export default Matrix

