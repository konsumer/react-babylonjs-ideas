import { HemisphericLight as BabylonHemisphericLight } from 'babylonjs'

import { withScene } from './Scene'

const HemisphericLight = ({
  scene,
  name,
  direction,
  intensity,
  children = null
}) => {
  const light = new BabylonHemisphericLight(name, direction, scene)
  light.intensity = intensity
  console.log('HemisphericLight', {
    name,
    scene,
    children,
    direction,
    intensity,
    light
  })
  return children
}

export default withScene(HemisphericLight)
