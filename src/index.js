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
  StandardMaterial
} from './react-babylon'

import withTime from './withTime'

// TODO: chnaging material children in meshes doesn't work

// this illustrates that stuff can load from seperate components
const DemoScene = withTime(({ time }) => {
  const x = (time / 1000) % 8
  return (
    <Scene clearColor={BABYLON.Color3.Black()}>
      <Box x={2}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Green()} />
      </Box>
      <Box x={4}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Blue()} />
      </Box>
      <Box x={6} />
      <Sphere x={x} name='player'>
        <StandardMaterial diffuseColor={BABYLON.Color3.Red()} />
      </Sphere>
      <FollowCamera
        name='camera1'
        target='player'
        heightOffset={10}
        cameraAcceleration={0.005}
        maxCameraSpeed={10}
      />
      <HemisphericLight name='light1' intensity={0.7} direction='up' />
    </Scene>
  )
})

// I am using recompsoe to add some logic here, but you can do it however

function Demo () {
  return (
    <Engine>
      <DemoScene interval={1} />
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Demo />, rootElement)
