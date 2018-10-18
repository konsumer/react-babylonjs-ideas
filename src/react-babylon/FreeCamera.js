import BABYLON from 'babylonjs'

import { withScene } from './Scene'
import { withCanvas } from './Engine'

const FreeCamera = (props) => {
  const {
    name,
    position,
    x = 0,
    y = 0,
    z = 0,
    scene,
    canvas,
    setActiveOnSceneIfNoneActive = true,
    target,
    children = null
  } = props
  if (!canvas) {
    console.error('No Canvas.')
  }
  const pos = position || new BABYLON.Vector3(x, y, z)
  const camera = new BABYLON.FreeCamera(
    name,
    pos,
    scene,
    setActiveOnSceneIfNoneActive
  )
  if (target) {
    camera.lockedTarget = typeof target === 'string' ? scene.getMeshByName(target).position : pos
  }
  camera.attachControl(canvas)
  if (process.env.NODE_ENV === 'development') {
    console.log('FreeCamera', { ...props, position: pos })
  }
  return children
}

export default withCanvas(withScene(FreeCamera))
