import React from 'react'
import BABYLON from 'babylonjs'

class Database extends React.Component {
  constructor (props) {
    super(props)
    const { callbackManifestChecked, currentSceneUrl, db, manifestVersionFound, mustUpdateRessources, hasReachedQuota, isSupported, idbFactory, IsUASupportingBlobStorage, IDBStorageEnabled, enableSceneOffline, enableTexturesOffline, urlToScene, callbackManifestChecked, disableManifestCheck } = props
    this.Database = new BABYLON.Database(urlToScene, callbackManifestChecked, disableManifestCheck)
    this.Database.callbackManifestChecked = callbackManifestChecked
    this.Database.currentSceneUrl = currentSceneUrl
    this.Database.db = db
    this.Database.manifestVersionFound = manifestVersionFound
    this.Database.mustUpdateRessources = mustUpdateRessources
    this.Database.hasReachedQuota = hasReachedQuota
    this.Database.isSupported = isSupported
    this.Database.idbFactory = idbFactory
    this.Database.IsUASupportingBlobStorage = IsUASupportingBlobStorage
    this.Database.IDBStorageEnabled = IDBStorageEnabled
    this.Database.enableSceneOffline = enableSceneOffline
    this.Database.enableTexturesOffline = enableTexturesOffline
  }

  render () {
    return null
  }
}

export default Database

