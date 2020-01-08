import React from 'react'

// Convenience component with default shallow equality check for sCU. 
class EmptyCompnent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log('Empty Component redner')
    return <div>Empty Component</div>
  }
}

export default EmptyCompnent