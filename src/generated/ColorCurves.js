import React from 'react'

class ColorCurves extends React.Component {
  constructor (props) {
    super(props)
    const { globalHue, globalDensity, globalSaturation, globalExposure, highlightsHue, highlightsDensity, highlightsSaturation, highlightsExposure, midtonesHue, midtonesDensity, midtonesSaturation, midtonesExposure, shadowsHue, shadowsDensity, shadowsSaturation, shadowsExposure, getColorGradingDataToRef } = props
    this.ColorCurves = new ColorCurves(globalHue, globalDensity, globalSaturation, globalExposure, highlightsHue, highlightsDensity, highlightsSaturation, highlightsExposure, midtonesHue, midtonesDensity, midtonesSaturation, midtonesExposure, shadowsHue, shadowsDensity, shadowsSaturation, shadowsExposure, getColorGradingDataToRef)
  }

  render () {
    return null
  }
}

export default ColorCurves

