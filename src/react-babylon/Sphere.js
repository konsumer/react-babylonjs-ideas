import BABYLON from 'babylonjs'

import { withScene } from './Scene'

const Sphere = (props) => {
  const {
    scene,
    name,
    position,
    x = 0,
    y = 0,
    z = 0,
    size = 1,
    height = 10,
    width = 10,
    depth = 10,
    faceColors = new BABYLON.Color4(1, 1, 1, 1),
    updatable = false,
    sideOrientation = BABYLON.DEFAULTSIDE,
    children = null
  // faceUV
  } = props
  const pos = position || new BABYLON.Vector3(x, y, z)
  const options = {
    position: pos,
    size,
    height,
    width,
    depth,
    faceColors,
    updatable,
    sideOrientation
  }
  const sphere = BABYLON.MeshBuilder.CreateSphere(name, options, scene)
  if (process.env.NODE_ENV === 'development') {
    console.log('Sphere', { sphere, ...props })
  }
  return children
}

export default withScene(Sphere)
