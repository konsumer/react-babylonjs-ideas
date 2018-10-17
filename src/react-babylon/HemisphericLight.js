import BABYLON from 'babylonjs'

import { withScene } from './Scene'

const HemisphericLight = (props) => {
  const {
    scene,
    name,
    direction,
    intensity,
    children = null
  } = props
  const light = new BABYLON.HemisphericLight(name, direction, scene)
  light.intensity = intensity
  if (process.env.NODE_ENV === 'development') {
    console.log('HemisphericLight', {
      light,
      ...props
    })
  }
  return children
}

export default withScene(HemisphericLight)
