import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import {
  Engine,
  Scene,
  FreeCamera,
  HemisphericLight,
  Sphere,
  Box
} from './react-babylon'

import withTime from './withTime'

// this illustrates that stuff can load from seperate components
const DemoScene = withTime(({ time }) => {
  const x = Math.floor(Math.random() * 20)
  return (
    <Scene>
      <Box x={2} name='cube1' />
      <Box x={4} name='cube2' />
      <Box x={6} name='cube3' />
      <Sphere x={x} />
      <FreeCamera name='camera1' y={5} z={-10} target='cube1' />
      <HemisphericLight name='light1' intensity={0.7} direction='up' />
    </Scene>
  )
})

// I am using recompsoe to add some logic here, but you can do it however

function Demo () {
  return (
    <Engine>
      <DemoScene interval={100} />
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Demo />, rootElement)
