import React from 'react'
import BABYLON from 'babylonjs'

class Tools extends React.Component {
  constructor (props) {
    super(props)
    const { BaseUrl, DefaultRetryStrategy, CorsBehavior, UseFallbackTexture, RegisteredExternalClasses, fallbackTexture, PreprocessUrl, NoneLogLevel, MessageLogLevel, WarningLogLevel, ErrorLogLevel, AllLogLevel, errorsCount, OnNewCacheEntry, Log, Warn, Error, LogCache, LogLevels, PerformanceNoneLogLevel, PerformanceUserMarkLogLevel, PerformanceConsoleLogLevel, PerformanceLogLevel, StartPerformanceCounter, EndPerformanceCounter, Now } = props
    this.Tools = new BABYLON.Tools()
    this.Tools.BaseUrl = BaseUrl
    this.Tools.DefaultRetryStrategy = DefaultRetryStrategy
    this.Tools.CorsBehavior = CorsBehavior
    this.Tools.UseFallbackTexture = UseFallbackTexture
    this.Tools.RegisteredExternalClasses = RegisteredExternalClasses
    this.Tools.fallbackTexture = fallbackTexture
    this.Tools.PreprocessUrl = PreprocessUrl
    this.Tools.NoneLogLevel = NoneLogLevel
    this.Tools.MessageLogLevel = MessageLogLevel
    this.Tools.WarningLogLevel = WarningLogLevel
    this.Tools.ErrorLogLevel = ErrorLogLevel
    this.Tools.AllLogLevel = AllLogLevel
    this.Tools.errorsCount = errorsCount
    this.Tools.OnNewCacheEntry = OnNewCacheEntry
    this.Tools.Log = Log
    this.Tools.Warn = Warn
    this.Tools.Error = Error
    this.Tools.LogCache = LogCache
    this.Tools.LogLevels = LogLevels
    this.Tools.PerformanceNoneLogLevel = PerformanceNoneLogLevel
    this.Tools.PerformanceUserMarkLogLevel = PerformanceUserMarkLogLevel
    this.Tools.PerformanceConsoleLogLevel = PerformanceConsoleLogLevel
    this.Tools.PerformanceLogLevel = PerformanceLogLevel
    this.Tools.StartPerformanceCounter = StartPerformanceCounter
    this.Tools.EndPerformanceCounter = EndPerformanceCounter
    this.Tools.Now = Now
  }

  render () {
    return null
  }
}

export default Tools

