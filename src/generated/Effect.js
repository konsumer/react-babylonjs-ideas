import React from 'react'

class Effect extends React.Component {
  constructor (props) {
    super(props)
    const { name, defines, onCompiled, onError, onBind, uniqueId, onCompileObservable, onErrorObservable, onBindObservable, key, isSupported } = props
    this.Effect = new Effect(name, defines, onCompiled, onError, onBind, uniqueId, onCompileObservable, onErrorObservable, onBindObservable, key, isSupported)
  }

  render () {
    return null
  }
}

export default Effect

