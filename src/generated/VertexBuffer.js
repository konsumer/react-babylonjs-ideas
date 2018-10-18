import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class VertexBuffer extends React.Component {
  constructor (props) {
    super(props)
    const { BYTE, UNSIGNED_BYTE, SHORT, UNSIGNED_SHORT, INT, UNSIGNED_INT, FLOAT, instanceDivisor, byteStride, byteOffset, normalized, type, PositionKind, NormalKind, TangentKind, UVKind, UV2Kind, UV3Kind, UV4Kind, UV5Kind, UV6Kind, ColorKind, MatricesIndicesKind, MatricesWeightsKind, MatricesIndicesExtraKind, MatricesWeightsExtraKind, engine, data, kind, updatable, postponeInternalCreation, stride, instanced, offset, size, type, normalized, useBytes } = props
    this.VertexBuffer = new BABYLON.VertexBuffer(engine, data, kind, updatable, postponeInternalCreation, stride, instanced, offset, size, type, normalized, useBytes)
    this.VertexBuffer.BYTE = BYTE
    this.VertexBuffer.UNSIGNED_BYTE = UNSIGNED_BYTE
    this.VertexBuffer.SHORT = SHORT
    this.VertexBuffer.UNSIGNED_SHORT = UNSIGNED_SHORT
    this.VertexBuffer.INT = INT
    this.VertexBuffer.UNSIGNED_INT = UNSIGNED_INT
    this.VertexBuffer.FLOAT = FLOAT
    this.VertexBuffer.instanceDivisor = instanceDivisor
    this.VertexBuffer.byteStride = byteStride
    this.VertexBuffer.byteOffset = byteOffset
    this.VertexBuffer.normalized = normalized
    this.VertexBuffer.type = type
    this.VertexBuffer.PositionKind = PositionKind
    this.VertexBuffer.NormalKind = NormalKind
    this.VertexBuffer.TangentKind = TangentKind
    this.VertexBuffer.UVKind = UVKind
    this.VertexBuffer.UV2Kind = UV2Kind
    this.VertexBuffer.UV3Kind = UV3Kind
    this.VertexBuffer.UV4Kind = UV4Kind
    this.VertexBuffer.UV5Kind = UV5Kind
    this.VertexBuffer.UV6Kind = UV6Kind
    this.VertexBuffer.ColorKind = ColorKind
    this.VertexBuffer.MatricesIndicesKind = MatricesIndicesKind
    this.VertexBuffer.MatricesWeightsKind = MatricesWeightsKind
    this.VertexBuffer.MatricesIndicesExtraKind = MatricesIndicesExtraKind
    this.VertexBuffer.MatricesWeightsExtraKind = MatricesWeightsExtraKind
  }

  render () {
    return null
  }
}

export default withEngine(VertexBuffer)

