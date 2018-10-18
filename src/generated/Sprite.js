import React from 'react'

class Sprite extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, color, width, height, angle, cellIndex, invertU, invertV, disposeWhenFinishedAnimating, animations, isPickable, actionManager, isVisible, size } = props
    this.Sprite = new Sprite(name, position, color, width, height, angle, cellIndex, invertU, invertV, disposeWhenFinishedAnimating, animations, isPickable, actionManager, isVisible, size)
  }

  render () {
    return null
  }
}

export default Sprite

