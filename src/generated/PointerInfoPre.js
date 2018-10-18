import React from 'react'

class PointerInfoPre extends React.Component {
  constructor (props) {
    super(props)
    const { ray, localPosition, skipOnPointerObservable } = props
    this.PointerInfoPre = new PointerInfoPre(ray, localPosition, skipOnPointerObservable)
  }

  render () {
    return null
  }
}

export default PointerInfoPre

