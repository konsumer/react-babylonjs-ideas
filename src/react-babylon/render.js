import ReactReconciler from 'react-reconciler'
import invariant from 'fbjs/lib/invariant'
import BABYLON from 'babylonjs'
import { shallowEqual } from 'shallow-equal-object'

import components from './components'

// string to vector mapping for directions
const directions = {
  up: BABYLON.Vector3.Up,
  down: BABYLON.Vector3.Down,
  left: BABYLON.Vector3.Left,
  right: BABYLON.Vector3.Right,
  forward: BABYLON.Vector3.Forward,
  backward: BABYLON.Vector3.Backward
}

// check if tag is known, get family
export const validTag = tag => components[tag] && components[tag].family

// dynamically get a Babylon object with args & props setup
export const getBabylon = (definition, options) => {
  const args = definition.args.map(a => options[a])
  const thing = new BABYLON[definition.name](...args)
  definition.props.forEach(p => {
    if (typeof options[p] !== 'undefined' && args.indexOf(p) === -1) {
      thing[p] = options[p]
    }
  })
  return thing
}

// TODO: add developer-tools stuff so it looks better in React panel

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

  createInstance: (type, { scene, ...props }, { canvas, engine, ...other }, ...more) => {
    const family = validTag(type)
    invariant(family, '%s tag not supported by ReactBabylon.', type)
    const definition = components[type]

    // console.log(type, { definition, props, scene, canvas, engine })

    // TODO: check props based on pre-computed static code-analysis of babylonjs
    // these could also use other prop-helpers to make the components nicer to work with

    if (family === 'meshes') {
      const { name, x = 0, y = 0, z = 0, position, ...options } = props
      const mesh = BABYLON.MeshBuilder[`Create${type}`](name, options, scene)
      mesh.position = position || new BABYLON.Vector3(x, y, z)
      mesh.family = family
      return mesh
    }

    if (family === 'cameras') {
      const { x = 0, y = 0, z = 0, position, target, ...options } = props
      options.position = position || new BABYLON.Vector3(x, y, z)
      if (target) {
        if (type === 'FollowCamera') {
          options.lockedTarget = typeof target === 'string' ? scene.getMeshByName(target) : target
        } else {
          options.lockedTarget = typeof target === 'string' ? scene.getMeshByName(target).position : target
        }
      }
      const camera = getBabylon(definition, { ...options, scene, canvas, engine })
      camera.attachControl(canvas)
      camera.family = family
      return camera
    }

    if (family === 'lights') {
      const { name, direction = BABYLON.Vector3.Up() } = props
      const dir = typeof direction === 'string' ? directions[direction.toLowerCase()]() : direction
      const light = new BABYLON.HemisphericLight(name, dir, scene)
      light.family = family
      return light
    }

    if (family === 'materials') {
      const material = getBabylon(definition, { ...props, scene, canvas, engine })
      material.family = family
      return material
    }

    console.error(`TODO: ${type} needs to be turned into a BABYLON instantiater in renderer.`)
  },

  prepareForCommit: () => {},

  resetAfterCommit: () => {},

  appendInitialChild: (parent, child) => {
    if (parent && child && parent.family === 'meshes' && child.family === 'materials') {
      parent.material = child
    }
  },

  appendChild (parent, child) {
  },

  finalizeInitialChildren: (element, type, props) => {},

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

  // text-content nodes are not used
  shouldSetTextContent: (type, props) => {
    return false
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
