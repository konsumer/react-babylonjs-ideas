import React from 'react'
import BABYLON from 'babylonjs'

class BaseParticleSystem extends React.Component {
  constructor (props) {
    super(props)
    const { BLENDMODE_ONEONE, BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_MULTIPLYADD, animations, id, name, renderingGroupId, emitter, emitRate, manualEmitCount, updateSpeed, targetStopDuration, disposeOnStop, minEmitPower, maxEmitPower, minLifeTime, maxLifeTime, minSize, maxSize, minScaleX, maxScaleX, minScaleY, maxScaleY, minInitialRotation, maxInitialRotation, minAngularSpeed, maxAngularSpeed, particleTexture, layerMask, customShader, preventAutoStart, noiseTexture, noiseStrength, onAnimationEnd, blendMode, forceDepthWrite, preWarmCycles, preWarmStepOffset, spriteCellChangeSpeed, startSpriteCellID, endSpriteCellID, spriteCellWidth, spriteCellHeight, spriteRandomStartCell, translationPivot, beginAnimationOnStart, beginAnimationFrom, beginAnimationTo, beginAnimationLoop, isAnimationSheetEnabled, gravity, startDelay, limitVelocityDamping, direction1, direction2, minEmitBox, maxEmitBox, color1, color2, colorDead, textureMask, particleEmitterType, billboardMode, isBillboardBased, imageProcessingConfiguration, name } = props
    this.BaseParticleSystem = new BABYLON.BaseParticleSystem(name)
    this.BaseParticleSystem.BLENDMODE_ONEONE = BLENDMODE_ONEONE
    this.BaseParticleSystem.BLENDMODE_STANDARD = BLENDMODE_STANDARD
    this.BaseParticleSystem.BLENDMODE_ADD = BLENDMODE_ADD
    this.BaseParticleSystem.BLENDMODE_MULTIPLY = BLENDMODE_MULTIPLY
    this.BaseParticleSystem.BLENDMODE_MULTIPLYADD = BLENDMODE_MULTIPLYADD
    this.BaseParticleSystem.animations = animations
    this.BaseParticleSystem.id = id
    this.BaseParticleSystem.name = name
    this.BaseParticleSystem.renderingGroupId = renderingGroupId
    this.BaseParticleSystem.emitter = emitter
    this.BaseParticleSystem.emitRate = emitRate
    this.BaseParticleSystem.manualEmitCount = manualEmitCount
    this.BaseParticleSystem.updateSpeed = updateSpeed
    this.BaseParticleSystem.targetStopDuration = targetStopDuration
    this.BaseParticleSystem.disposeOnStop = disposeOnStop
    this.BaseParticleSystem.minEmitPower = minEmitPower
    this.BaseParticleSystem.maxEmitPower = maxEmitPower
    this.BaseParticleSystem.minLifeTime = minLifeTime
    this.BaseParticleSystem.maxLifeTime = maxLifeTime
    this.BaseParticleSystem.minSize = minSize
    this.BaseParticleSystem.maxSize = maxSize
    this.BaseParticleSystem.minScaleX = minScaleX
    this.BaseParticleSystem.maxScaleX = maxScaleX
    this.BaseParticleSystem.minScaleY = minScaleY
    this.BaseParticleSystem.maxScaleY = maxScaleY
    this.BaseParticleSystem.minInitialRotation = minInitialRotation
    this.BaseParticleSystem.maxInitialRotation = maxInitialRotation
    this.BaseParticleSystem.minAngularSpeed = minAngularSpeed
    this.BaseParticleSystem.maxAngularSpeed = maxAngularSpeed
    this.BaseParticleSystem.particleTexture = particleTexture
    this.BaseParticleSystem.layerMask = layerMask
    this.BaseParticleSystem.customShader = customShader
    this.BaseParticleSystem.preventAutoStart = preventAutoStart
    this.BaseParticleSystem.noiseTexture = noiseTexture
    this.BaseParticleSystem.noiseStrength = noiseStrength
    this.BaseParticleSystem.onAnimationEnd = onAnimationEnd
    this.BaseParticleSystem.blendMode = blendMode
    this.BaseParticleSystem.forceDepthWrite = forceDepthWrite
    this.BaseParticleSystem.preWarmCycles = preWarmCycles
    this.BaseParticleSystem.preWarmStepOffset = preWarmStepOffset
    this.BaseParticleSystem.spriteCellChangeSpeed = spriteCellChangeSpeed
    this.BaseParticleSystem.startSpriteCellID = startSpriteCellID
    this.BaseParticleSystem.endSpriteCellID = endSpriteCellID
    this.BaseParticleSystem.spriteCellWidth = spriteCellWidth
    this.BaseParticleSystem.spriteCellHeight = spriteCellHeight
    this.BaseParticleSystem.spriteRandomStartCell = spriteRandomStartCell
    this.BaseParticleSystem.translationPivot = translationPivot
    this.BaseParticleSystem.beginAnimationOnStart = beginAnimationOnStart
    this.BaseParticleSystem.beginAnimationFrom = beginAnimationFrom
    this.BaseParticleSystem.beginAnimationTo = beginAnimationTo
    this.BaseParticleSystem.beginAnimationLoop = beginAnimationLoop
    this.BaseParticleSystem.isAnimationSheetEnabled = isAnimationSheetEnabled
    this.BaseParticleSystem.gravity = gravity
    this.BaseParticleSystem.startDelay = startDelay
    this.BaseParticleSystem.limitVelocityDamping = limitVelocityDamping
    this.BaseParticleSystem.direction1 = direction1
    this.BaseParticleSystem.direction2 = direction2
    this.BaseParticleSystem.minEmitBox = minEmitBox
    this.BaseParticleSystem.maxEmitBox = maxEmitBox
    this.BaseParticleSystem.color1 = color1
    this.BaseParticleSystem.color2 = color2
    this.BaseParticleSystem.colorDead = colorDead
    this.BaseParticleSystem.textureMask = textureMask
    this.BaseParticleSystem.particleEmitterType = particleEmitterType
    this.BaseParticleSystem.billboardMode = billboardMode
    this.BaseParticleSystem.isBillboardBased = isBillboardBased
    this.BaseParticleSystem.imageProcessingConfiguration = imageProcessingConfiguration
  }

  render () {
    return null
  }
}

export default BaseParticleSystem

