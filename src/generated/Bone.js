import React from 'react'

class Bone extends React.Component {
  constructor (props) {
    super(props)
    const { name, children, animations, length, position, rotation, rotationQuaternion, scaling, animationPropertiesOverride } = props
    this.Bone = new Bone(name, children, animations, length, position, rotation, rotationQuaternion, scaling, animationPropertiesOverride)
  }

  render () {
    return null
  }
}

export default Bone

