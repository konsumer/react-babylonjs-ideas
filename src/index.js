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

let x = 0
let direction = true
const animatePlayer = delta => {
  // weave back & forth in a sine wave
  const z = Math.sin(delta / 500) * 2

  // move straight back and forth
  x += direction ? 0.01 : -0.01
  if (x > 10 || x < 0) {
    direction = !direction
  }

  return { x, z }
}
const _MovingPlayer = ({ x, z }) => (
  <Sphere x={x} z={z} name='player'>
    <StandardMaterial diffuseColor={BABYLON.Color3.Red()} />
  </Sphere>
)
const MovingPlayer = withBeforeRender(animatePlayer)(_MovingPlayer)

const animateColor = delta => {
  const c = Math.abs(Math.sin(delta / 200) / 2)
  return { color: new BABYLON.Color3(c * 2, 1 - c, Math.cos(c)) }
}
const _TrippyMaterial = ({ color }) => (
  <StandardMaterial diffuseColor={color} />
)
const TrippyMaterial = withBeforeRender(animateColor)(_TrippyMaterial)

// this illustrates that stuff can load from seperate components
const DemoScene = () => {
  return (
    <Scene clearColor={BABYLON.Color3.Black()}>
      <Box x={2}>
        <TrippyMaterial />
      </Box>
      <Box x={4}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Blue()} />
      </Box>
      <Box x={6}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Yellow()} />
      </Box>
      <Box x={8}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Purple()} />
      </Box>
      <MovingPlayer />
      <FollowCamera
        name='camera1'
        target='player'
        heightOffset={4}
        cameraAcceleration={0.05}
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
