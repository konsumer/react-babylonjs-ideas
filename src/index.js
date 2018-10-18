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

function Demo () {
  return (
    <Engine>
      <Scene>
        <Sphere name='player' />
        <FreeCamera name='camera1' y={5} z={-10} target='player' />
        <HemisphericLight name='light1' intensity={0.7} direction='up' />
      </Scene>
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Demo />, rootElement)
