import React from 'react'
import ReactDOM from 'react-dom'

import BABYLON from 'babylonjs'

import './styles.css'

import Engine from './react-babylon/Engine'
import Scene from './react-babylon/Scene'
import FreeCamera from './react-babylon/FreeCamera'
import HemisphericLight from './react-babylon/HemisphericLight'
import Sphere from './react-babylon/Sphere'

console.log('BABYLON', BABYLON)

function App () {
  return (
    <Engine>
      <Scene>
        <Sphere name='player' />
        <FreeCamera name='camera1' y={5} z={-10} target='player' />
        <HemisphericLight name='light1' intensity={0.7} />
      </Scene>
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
