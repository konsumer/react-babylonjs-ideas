import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import Engine from './react-babylon/Engine'
import Scene from './react-babylon/Scene'
import FreeCamera from './react-babylon/FreeCamera'
import HemisphericLight from './react-babylon/HemisphericLight'
import Sphere from './react-babylon/Sphere'

function App () {
  return (
    <Engine>
      <Scene debug>
        <Sphere name='player' />
        <FreeCamera name='camera1' y={5} z={-10} target='player' />
        <HemisphericLight name='light1' intensity={0.7} />
      </Scene>
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
