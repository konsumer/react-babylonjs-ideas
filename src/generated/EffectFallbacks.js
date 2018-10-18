import React from 'react'

class EffectFallbacks extends React.Component {
  constructor (props) {
    super(props)
    const { isMoreFallbacks } = props
    this.EffectFallbacks = new EffectFallbacks(isMoreFallbacks)
  }

  render () {
    return null
  }
}

export default EffectFallbacks

