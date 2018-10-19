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

const roundPlace = (num, place = 100) => Math.ceil((num * place) / place)

// this shows how to use ref to do more complex logic
// player moves on it's own timer towards x/z props
class _MovingPlayer extends React.Component {
  state = {
    x: 0,
    z: 0,
    realX: 0,
    realZ: 0
  }

  // since I am using withTime, this gets called on interval of interval prop
  componentWillReceiveProps (nextProps) {
    const x = nextProps.x || this.state.x
    const z = nextProps.z || this.state.z
    let realX = this.player.position.x
    let realZ = this.player.position.z
    const currentX = roundPlace(this.player.position.x)
    const currentZ = roundPlace(this.player.position.z)
    const speed = (this.props.speed * (this.props.time % 4))
    if (this.player) {
      if (currentX <= x) {
        realX += speed
      } else if (currentX > x) {
        realX -= speed
      }
      if (currentZ <= z) {
        realZ += speed
      } else if (currentZ > z) {
        realZ -= speed
      }
    }
    this.setState({ x, z, realX, realZ })
  }

  render () {
    return (
      <Sphere x={this.state.realX} z={this.state.realZ} name='player' ref={r => { this.player = r }}>
        <StandardMaterial diffuseColor={BABYLON.Color3.Red()} />
      </Sphere>
    )
  }
}
const MovingPlayer = withTime(_MovingPlayer)

MovingPlayer.defaultProps = {
  interval: 40,
  speed: 0.02
}

// TODO: changing material children in meshes doesn't work

// this illustrates that stuff can load from seperate components
// timer updates every 5 seconds to tell player where to go
const _DemoScene = ({ time }) => {
  const x = (time / 1000) % 8
  const z = Math.random() * 10
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
      <MovingPlayer x={x} z={z} />
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
const DemoScene = withTime(_DemoScene)

const Demo = () => {
  return (
    <Engine>
      <DemoScene interval={5000} />
    </Engine>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Demo />, rootElement)
