import ReactReconciler from 'react-reconciler'
import invariant from 'fbjs/lib/invariant'
import BABYLON from 'babylonjs'
import { shallowEqual } from 'shallow-equal-object'

import cameras from './cameras.json'
import lights from './lights.json'
import meshes from './meshes.json'

const tags = {
  cameras: Object.values(cameras),
  lights: Object.values(lights),
  meshes: Object.values(meshes)
}

const directions = {
  up: BABYLON.Vector3.Up,
  down: BABYLON.Vector3.Down,
  left: BABYLON.Vector3.Left,
  right: BABYLON.Vector3.Right,
  forward: BABYLON.Vector3.Forward,
  backward: BABYLON.Vector3.Backward
}

// check if tag is known, get family
export const validTag = tag => {
  for (let t in tags) {
    if (tags[t].find(it => it === tag)) {
      return t
    }
  }
}

// TODO: add developer-tools stuff to improve use of that

export const hostConfig = {
  supportsMutation: true,

  now: Date.now,

  getRootHostContext: () => {
    return {}
  },

  getChildHostContext: () => {
    return {}
  },

  prepareUpdate (element, oldProps, newProps) {
    return true
  },

  createInstance: (type, { scene, ...props }, { canvas, engine }) => {
    const family = validTag(type)
    invariant(family, '%s tag not supported by ReactBabylon.', type)

    console.log(type, { props, family, scene, engine, canvas })

    // TODO: check props based on pre-computed static code-analysis of babylonjs
    // For now, I just harcoded the stuff in the demo-code
    // these could also use other prop-helpers to make the components nicer to work with

    if (family === 'meshes') {
      const { name, x = 0, y = 0, z = 0, ...options } = props
      const mesh = BABYLON.MeshBuilder[`Create${type}`](name, options, scene)
      mesh.position = new BABYLON.Vector3(x, y, z)
      return mesh
    }

    if (type === 'FreeCamera') {
      const { name, x = 0, y = 0, z = 0, setActiveOnSceneIfNoneActive = true, target, ...options } = props
      const camera = new BABYLON.FreeCamera(name, new BABYLON.Vector3(x, y, z), scene, setActiveOnSceneIfNoneActive)

      // TODO: no checks of props, refactor when this is auto-generated
      Object.keys(options).forEach(k => {
        camera[k] = options[k]
      })

      if (target) {
        camera.lockedTarget = typeof target === 'string' ? scene.getMeshByName(target).position : target
      }

      camera.attachControl(canvas)
      return camera
    }

    if (type === 'HemisphericLight') {
      const { name, direction = BABYLON.Vector3.Up() } = props
      const dir = typeof direction === 'string' ? directions[direction.toLowerCase()]() : direction
      const light = new BABYLON.HemisphericLight(name, dir, scene)
      return light
    }

    console.error(`TODO: ${type} needs to be turned into a BABYLON instantiater in renderer.`)
  },

  prepareForCommit: () => {},

  resetAfterCommit: () => {},

  appendInitialChild: (parent, child) => {},

  appendChild (parent, child) {},

  finalizeInitialChildren: (element, type, props) => {
  },

  appendChildToContainer: (parent, child) => {},

  commitUpdate (element, updatePayload, type, oldProps, newProps) {
    const family = validTag(type)
    // TODO: check props based on pre-computed static code-analysis of babylonjs

    if (family === 'meshes') {
      if (!shallowEqual(oldProps, newProps)) {
        const { x = 0, y = 0, z = 0, ...props } = newProps
        element.position = new BABYLON.Vector3(x, y, z)

        Object.keys(props).forEach(k => {
          element[k] = props[k]
        })
      }
    }
  },

  removeChild (parentInstance, child) {},

  // These 3 might be used later for text-node content
  shouldSetTextContent: (type, props) => {
    return typeof props.children === 'string' || typeof props.children === 'number'
  },
  createTextInstance: text => {},
  commitTextUpdate (textInstance, oldText, newText) {}
}

const ReactReconcilerInst = ReactReconciler(hostConfig)

export function render (reactElement, element, callback) {
  // Create a root Container if it doesnt exist
  if (!element._rootContainer) {
    element._rootContainer = ReactReconcilerInst.createContainer(element, false)
  }

  // update the root Container
  return ReactReconcilerInst.updateContainer(reactElement, element._rootContainer, null, callback)
}

export function unmount (...args) {
  console.log('UNMOUNT', args)
}
