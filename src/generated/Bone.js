import React from 'react'
import BABYLON from 'babylonjs'

class Bone extends React.Component {
  constructor (props) {
    super(props)
    const { name, children, animations, length, position, rotation, rotationQuaternion, scaling, animationPropertiesOverride, name, skeleton, parentBone, localMatrix, restPose, baseMatrix, index } = props
    this.Bone = new BABYLON.Bone(name, skeleton, parentBone, localMatrix, restPose, baseMatrix, index)
    this.Bone.name = name
    this.Bone.children = children
    this.Bone.animations = animations
    this.Bone.length = length
    this.Bone.position = position
    this.Bone.rotation = rotation
    this.Bone.rotationQuaternion = rotationQuaternion
    this.Bone.scaling = scaling
    this.Bone.animationPropertiesOverride = animationPropertiesOverride
  }

  render () {
    return null
  }
}

export default Bone

