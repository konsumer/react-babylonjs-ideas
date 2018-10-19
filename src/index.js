import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import {
  Engine,
  Scene,
  FreeCamera,
  HemisphericLight,
  Sphere
} from './react-babylon'

// this illustrates that stuff can load form different components
const DemoScene = () => (
  <Scene>
    <Sphere name='player' />
    <FreeCamera name='camera1' y={5} z={-10} target='player' />
    <HemisphericLight name='light1' intensity={0.7} direction='up' />
  </Scene>
)

function Demo () {
  return (
    <Engine>
      <DemoScene />
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Demo />, rootElement)
