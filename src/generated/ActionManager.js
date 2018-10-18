import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ActionManager extends React.Component {
  constructor (props) {
    super(props)
    const { NothingTrigger, OnPickTrigger, OnLeftPickTrigger, OnRightPickTrigger, OnCenterPickTrigger, OnPickDownTrigger, OnDoublePickTrigger, OnPickUpTrigger, OnPickOutTrigger, OnLongPressTrigger, OnPointerOverTrigger, OnPointerOutTrigger, OnEveryFrameTrigger, OnIntersectionEnterTrigger, OnIntersectionExitTrigger, OnKeyDownTrigger, OnKeyUpTrigger, Triggers, actions, hoverCursor, hasPointerTriggers, hasPickTriggers, HasTriggers, HasPickTriggers, scene } = props
    this.ActionManager = new BABYLON.ActionManager(scene)
    this.ActionManager.NothingTrigger = NothingTrigger
    this.ActionManager.OnPickTrigger = OnPickTrigger
    this.ActionManager.OnLeftPickTrigger = OnLeftPickTrigger
    this.ActionManager.OnRightPickTrigger = OnRightPickTrigger
    this.ActionManager.OnCenterPickTrigger = OnCenterPickTrigger
    this.ActionManager.OnPickDownTrigger = OnPickDownTrigger
    this.ActionManager.OnDoublePickTrigger = OnDoublePickTrigger
    this.ActionManager.OnPickUpTrigger = OnPickUpTrigger
    this.ActionManager.OnPickOutTrigger = OnPickOutTrigger
    this.ActionManager.OnLongPressTrigger = OnLongPressTrigger
    this.ActionManager.OnPointerOverTrigger = OnPointerOverTrigger
    this.ActionManager.OnPointerOutTrigger = OnPointerOutTrigger
    this.ActionManager.OnEveryFrameTrigger = OnEveryFrameTrigger
    this.ActionManager.OnIntersectionEnterTrigger = OnIntersectionEnterTrigger
    this.ActionManager.OnIntersectionExitTrigger = OnIntersectionExitTrigger
    this.ActionManager.OnKeyDownTrigger = OnKeyDownTrigger
    this.ActionManager.OnKeyUpTrigger = OnKeyUpTrigger
    this.ActionManager.Triggers = Triggers
    this.ActionManager.actions = actions
    this.ActionManager.hoverCursor = hoverCursor
    this.ActionManager.hasPointerTriggers = hasPointerTriggers
    this.ActionManager.hasPickTriggers = hasPickTriggers
    this.ActionManager.HasTriggers = HasTriggers
    this.ActionManager.HasPickTriggers = HasPickTriggers
  }

  render () {
    return null
  }
}

export default withScene(ActionManager)

