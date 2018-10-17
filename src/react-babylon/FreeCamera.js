import { FreeCamera as BabylonFreeCamera, Vector3 } from 'babylonjs'

import { withScene } from './Scene'
import { withEngine } from './Babylon'

const FreeCamera = ({
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
}) => {
  const pos = position || new Vector3(x, y, z)
  const camera = new BabylonFreeCamera(
    name,
    pos,
    scene,
    setActiveOnSceneIfNoneActive
  )
  if (target) {
    camera.lockedTarget =
      typeof target === 'string' ? scene.getMeshByName(target).position : pos
  }
  camera.attachControl(canvas)
  console.log('FreeCamera', {
    name,
    scene,
    children,
    pos,
    target,
    setActiveOnSceneIfNoneActive,
    canvas
  })
  return children
}

export default withEngine(withScene(FreeCamera))
