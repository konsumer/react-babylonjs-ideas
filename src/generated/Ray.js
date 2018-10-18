import React from 'react'
import BABYLON from 'babylonjs'

class Ray extends React.Component {
  constructor (props) {
    super(props)
    const { origin, direction, length, smallnum, rayl, origin, direction, length } = props
    this.Ray = new BABYLON.Ray(origin, direction, length)
    this.Ray.origin = origin
    this.Ray.direction = direction
    this.Ray.length = length
    this.Ray.smallnum = smallnum
    this.Ray.rayl = rayl
  }

  render () {
    return null
  }
}

export default Ray

