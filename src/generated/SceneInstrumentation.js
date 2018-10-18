import React from 'react'
import { withScene } from './Scene'

class SceneInstrumentation extends React.Component {
  constructor (props) {
    super(props)
    const { scene, activeMeshesEvaluationTimeCounter, captureActiveMeshesEvaluationTime, renderTargetsRenderTimeCounter, captureRenderTargetsRenderTime, particlesRenderTimeCounter, captureParticlesRenderTime, spritesRenderTimeCounter, captureSpritesRenderTime, physicsTimeCounter, capturePhysicsTime, animationsTimeCounter, captureAnimationsTime, frameTimeCounter, captureFrameTime, interFrameTimeCounter, captureInterFrameTime, renderTimeCounter, captureRenderTime, cameraRenderTimeCounter, captureCameraRenderTime, drawCallsCounter, textureCollisionsCounter } = props
    this.SceneInstrumentation = new SceneInstrumentation(scene, activeMeshesEvaluationTimeCounter, captureActiveMeshesEvaluationTime, renderTargetsRenderTimeCounter, captureRenderTargetsRenderTime, particlesRenderTimeCounter, captureParticlesRenderTime, spritesRenderTimeCounter, captureSpritesRenderTime, physicsTimeCounter, capturePhysicsTime, animationsTimeCounter, captureAnimationsTime, frameTimeCounter, captureFrameTime, interFrameTimeCounter, captureInterFrameTime, renderTimeCounter, captureRenderTime, cameraRenderTimeCounter, captureCameraRenderTime, drawCallsCounter, textureCollisionsCounter)
  }

  render () {
    return null
  }
}

export default withScene(SceneInstrumentation)

