import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import Babylon from './react-babylon/Babylon'
import Scene from './react-babylon/Scene'
import FreeCamera from './react-babylon/FreeCamera'
import HemisphericLight from './react-babylon/HemisphericLight'
import Sphere from './react-babylon/Sphere'

function App () {
  return (
    <Babylon>
      <Scene>
        <Sphere name='player' />
        <FreeCamera name='camera1' y={5} z={-10} target='player' />
        <HemisphericLight name='light1' intensity={0.7} />
      </Scene>
    </Babylon>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
