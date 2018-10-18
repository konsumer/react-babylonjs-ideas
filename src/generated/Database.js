import React from 'react'

class Database extends React.Component {
  constructor (props) {
    super(props)
    const { callbackManifestChecked, currentSceneUrl, db, manifestVersionFound, mustUpdateRessources, hasReachedQuota, isSupported, idbFactory, enableSceneOffline, enableTexturesOffline } = props
    this.Database = new Database(callbackManifestChecked, currentSceneUrl, db, manifestVersionFound, mustUpdateRessources, hasReachedQuota, isSupported, idbFactory, enableSceneOffline, enableTexturesOffline)
  }

  render () {
    return null
  }
}

export default Database

