import React from 'react'

class ModelShape extends React.Component {
  constructor (props) {
    super(props)
    const { shapeID } = props
    this.ModelShape = new ModelShape(shapeID)
  }

  render () {
    return null
  }
}

export default ModelShape

