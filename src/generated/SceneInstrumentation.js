import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SceneInstrumentation extends React.Component {
  constructor (props) {
    super(props)
    const { scene, activeMeshesEvaluationTimeCounter, captureActiveMeshesEvaluationTime, renderTargetsRenderTimeCounter, captureRenderTargetsRenderTime, particlesRenderTimeCounter, captureParticlesRenderTime, spritesRenderTimeCounter, captureSpritesRenderTime, physicsTimeCounter, capturePhysicsTime, animationsTimeCounter, captureAnimationsTime, frameTimeCounter, captureFrameTime, interFrameTimeCounter, captureInterFrameTime, renderTimeCounter, captureRenderTime, cameraRenderTimeCounter, captureCameraRenderTime, drawCallsCounter, textureCollisionsCounter, scene } = props
    this.SceneInstrumentation = new BABYLON.SceneInstrumentation(scene)
    this.SceneInstrumentation.scene = scene
    this.SceneInstrumentation.activeMeshesEvaluationTimeCounter = activeMeshesEvaluationTimeCounter
    this.SceneInstrumentation.captureActiveMeshesEvaluationTime = captureActiveMeshesEvaluationTime
    this.SceneInstrumentation.renderTargetsRenderTimeCounter = renderTargetsRenderTimeCounter
    this.SceneInstrumentation.captureRenderTargetsRenderTime = captureRenderTargetsRenderTime
    this.SceneInstrumentation.particlesRenderTimeCounter = particlesRenderTimeCounter
    this.SceneInstrumentation.captureParticlesRenderTime = captureParticlesRenderTime
    this.SceneInstrumentation.spritesRenderTimeCounter = spritesRenderTimeCounter
    this.SceneInstrumentation.captureSpritesRenderTime = captureSpritesRenderTime
    this.SceneInstrumentation.physicsTimeCounter = physicsTimeCounter
    this.SceneInstrumentation.capturePhysicsTime = capturePhysicsTime
    this.SceneInstrumentation.animationsTimeCounter = animationsTimeCounter
    this.SceneInstrumentation.captureAnimationsTime = captureAnimationsTime
    this.SceneInstrumentation.frameTimeCounter = frameTimeCounter
    this.SceneInstrumentation.captureFrameTime = captureFrameTime
    this.SceneInstrumentation.interFrameTimeCounter = interFrameTimeCounter
    this.SceneInstrumentation.captureInterFrameTime = captureInterFrameTime
    this.SceneInstrumentation.renderTimeCounter = renderTimeCounter
    this.SceneInstrumentation.captureRenderTime = captureRenderTime
    this.SceneInstrumentation.cameraRenderTimeCounter = cameraRenderTimeCounter
    this.SceneInstrumentation.captureCameraRenderTime = captureCameraRenderTime
    this.SceneInstrumentation.drawCallsCounter = drawCallsCounter
    this.SceneInstrumentation.textureCollisionsCounter = textureCollisionsCounter
  }

  render () {
    return null
  }
}

export default withScene(SceneInstrumentation)

