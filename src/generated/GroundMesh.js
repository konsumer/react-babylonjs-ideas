import React from 'react'

class GroundMesh extends React.Component {
  constructor (props) {
    super(props)
    const { generateOctree, subdivisions, subdivisionsX, subdivisionsY } = props
    this.GroundMesh = new GroundMesh(generateOctree, subdivisions, subdivisionsX, subdivisionsY)
  }

  render () {
    return null
  }
}

export default GroundMesh

