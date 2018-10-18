import React from 'react'

class HemisphericLight extends React.Component {
  constructor (props) {
    super(props)
    const { groundColor, direction } = props
    this.HemisphericLight = new HemisphericLight(groundColor, direction)
  }

  render () {
    return null
  }
}

export default HemisphericLight

