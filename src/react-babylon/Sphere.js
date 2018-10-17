import { MeshBuilder, Vector3, Color4, DEFAULTSIDE } from 'babylonjs'

import { withScene } from './Scene'

const Sphere = ({
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
  faceColors = new Color4(1, 1, 1, 1),
  updatable = false,
  sideOrientation = DEFAULTSIDE,
  children = null
  // faceUV
}) => {
  const pos = position || new Vector3(x, y, z)
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
  MeshBuilder.CreateSphere(name, options, scene)
  console.log('Sphere', { name, scene, children, ...options })
  return children
}

export default withScene(Sphere)
