import React from 'react'

class BloomEffect extends React.Component {
  constructor (props) {
    super(props)
    const { bloomScale, threshold, weight, kernel } = props
    this.BloomEffect = new BloomEffect(bloomScale, threshold, weight, kernel)
  }

  render () {
    return null
  }
}

export default BloomEffect

