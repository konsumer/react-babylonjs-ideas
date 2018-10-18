import React from 'react'

class ArcFollowCamera extends React.Component {
  constructor (props) {
    super(props)
    const { alpha, beta, radius, target } = props
    this.ArcFollowCamera = new ArcFollowCamera(alpha, beta, radius, target)
  }

  render () {
    return null
  }
}

export default ArcFollowCamera

