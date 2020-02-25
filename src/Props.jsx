import React from 'react'
import appStyles from './App.module.css'

class PropsComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  onChangeColor () {
    this.props.onChangeColor('blue')
  }

  render () {
    return <div>
      <button className={appStyles.button} onClick={() => this.onChangeColor()} style={{color: this.props.color}}>change props color</button>
    </div>
  }
}

export default PropsComponent