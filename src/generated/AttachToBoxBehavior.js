import React from 'react'

class AttachToBoxBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { ui, name, distanceAwayFromFace, distanceAwayFromBottomOfFace } = props
    this.AttachToBoxBehavior = new AttachToBoxBehavior(ui, name, distanceAwayFromFace, distanceAwayFromBottomOfFace)
  }

  render () {
    return null
  }
}

export default AttachToBoxBehavior

