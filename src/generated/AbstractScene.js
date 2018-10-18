import React from 'react'

class AbstractScene extends React.Component {
  constructor (props) {
    super(props)
    const { rootNodes, cameras, lights, meshes, skeletons, particleSystems, animations, animationGroups, multiMaterials, materials, morphTargetManagers, geometries, transformNodes, actionManagers, textures } = props
    this.AbstractScene = new AbstractScene(rootNodes, cameras, lights, meshes, skeletons, particleSystems, animations, animationGroups, multiMaterials, materials, morphTargetManagers, geometries, transformNodes, actionManagers, textures)
  }

  render () {
    return null
  }
}

export default AbstractScene

