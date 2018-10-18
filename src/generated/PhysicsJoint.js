import React from 'react'
import BABYLON from 'babylonjs'

class PhysicsJoint extends React.Component {
  constructor (props) {
    super(props)
    const { type, jointData, physicsJoint, physicsPlugin, DistanceJoint, HingeJoint, BallAndSocketJoint, WheelJoint, SliderJoint, PrismaticJoint, UniversalJoint, Hinge2Joint, PointToPointJoint, SpringJoint, LockJoint, type, jointData } = props
    this.PhysicsJoint = new BABYLON.PhysicsJoint(type, jointData)
    this.PhysicsJoint.type = type
    this.PhysicsJoint.jointData = jointData
    this.PhysicsJoint.physicsJoint = physicsJoint
    this.PhysicsJoint.physicsPlugin = physicsPlugin
    this.PhysicsJoint.DistanceJoint = DistanceJoint
    this.PhysicsJoint.HingeJoint = HingeJoint
    this.PhysicsJoint.BallAndSocketJoint = BallAndSocketJoint
    this.PhysicsJoint.WheelJoint = WheelJoint
    this.PhysicsJoint.SliderJoint = SliderJoint
    this.PhysicsJoint.PrismaticJoint = PrismaticJoint
    this.PhysicsJoint.UniversalJoint = UniversalJoint
    this.PhysicsJoint.Hinge2Joint = Hinge2Joint
    this.PhysicsJoint.PointToPointJoint = PointToPointJoint
    this.PhysicsJoint.SpringJoint = SpringJoint
    this.PhysicsJoint.LockJoint = LockJoint
  }

  render () {
    return null
  }
}

export default PhysicsJoint

