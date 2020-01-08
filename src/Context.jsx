import React from 'react'
import { ColorContext } from './context'

class ChildComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <ColorContext.Consumer>
      {color => (
        <React.Fragment>
          <div>color: {color}</div>
        </React.Fragment>
      )}
    </ColorContext.Consumer>
  }
}

class ContextComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <ChildComponent></ChildComponent>
  }
}

export default ContextComponent