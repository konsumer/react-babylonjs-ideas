import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import BABYLON from 'babylonjs'

import {
  Engine,
  Scene,
  FollowCamera,
  HemisphericLight,
  Sphere,
  Box,
  StandardMaterial,
  withBeforeRender
} from './react-babylon'

const animatePlayer = delta => {
  let x = (delta / 1000) % 8
  let z = Math.sin((delta / 1000) % 8)
  return { z, x }
}

const _MovingPlayer = ({ x, z }) => (
  <Sphere x={x} z={z} name='player'>
    <StandardMaterial diffuseColor={BABYLON.Color3.Red()} />
  </Sphere>
)

const MovingPlayer = withBeforeRender(animatePlayer)(_MovingPlayer)

// TODO: changing material children in meshes doesn't work

// this illustrates that stuff can load from seperate components
// timer updates every 5 seconds to tell player where to go
const DemoScene = () => {
  return (
    <Scene clearColor={BABYLON.Color3.Black()}>
      <Box x={2}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Green()} />
      </Box>
      <Box x={4}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Blue()} />
      </Box>
      <Box x={6}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Yellow()} />
      </Box>
      <MovingPlayer />
      <FollowCamera
        name='camera1'
        target='player'
        heightOffset={5}
        cameraAcceleration={0.005}
        maxCameraSpeed={100}
      />
      <HemisphericLight name='light1' intensity={0.7} direction='up' />
    </Scene>
  )
}

const Demo = () => {
  return (
    <Engine>
      <DemoScene />
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Demo />, rootElement)
