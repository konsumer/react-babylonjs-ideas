import React from 'react'
import BABYLON from 'babylonjs'

class ColorCurves extends React.Component {
  constructor (props) {
    super(props)
    const { globalHue, globalDensity, globalSaturation, globalExposure, highlightsHue, highlightsDensity, highlightsSaturation, highlightsExposure, midtonesHue, midtonesDensity, midtonesSaturation, midtonesExposure, shadowsHue, shadowsDensity, shadowsSaturation, shadowsExposure, getColorGradingDataToRef, applyColorGradingSliderNonlinear, fromHSBToRef, clamp } = props
    this.ColorCurves = new BABYLON.ColorCurves()
    this.ColorCurves.globalHue = globalHue
    this.ColorCurves.globalDensity = globalDensity
    this.ColorCurves.globalSaturation = globalSaturation
    this.ColorCurves.globalExposure = globalExposure
    this.ColorCurves.highlightsHue = highlightsHue
    this.ColorCurves.highlightsDensity = highlightsDensity
    this.ColorCurves.highlightsSaturation = highlightsSaturation
    this.ColorCurves.highlightsExposure = highlightsExposure
    this.ColorCurves.midtonesHue = midtonesHue
    this.ColorCurves.midtonesDensity = midtonesDensity
    this.ColorCurves.midtonesSaturation = midtonesSaturation
    this.ColorCurves.midtonesExposure = midtonesExposure
    this.ColorCurves.shadowsHue = shadowsHue
    this.ColorCurves.shadowsDensity = shadowsDensity
    this.ColorCurves.shadowsSaturation = shadowsSaturation
    this.ColorCurves.shadowsExposure = shadowsExposure
    this.ColorCurves.getColorGradingDataToRef = getColorGradingDataToRef
    this.ColorCurves.applyColorGradingSliderNonlinear = applyColorGradingSliderNonlinear
    this.ColorCurves.fromHSBToRef = fromHSBToRef
    this.ColorCurves.clamp = clamp
  }

  render () {
    return null
  }
}

export default ColorCurves

