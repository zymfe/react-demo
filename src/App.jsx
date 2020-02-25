import React from 'react'
import appStyles from './App.module.css'
import {ColorContext} from './context.js'
import PropsComponent from './Props'

console.log('React: ', React)
console.log('React.createContext: ', React.createContext)
console.log('Context.Provider', ColorContext.Provider)
console.log('Context.Consumer', ColorContext.Consumer)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 100,
      color: 'red'
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('App render', this, appStyles)
    // return <React.Fragment>
    //   <div>count: {this.state.count}</div>
    //   <div>color: {this.state.color}</div>
    //   <button onClick={() => this.add()}>add</button>
    // </React.Fragment>
    return <React.Fragment>
      <div>color: {this.state.color}</div>
      <button className={appStyles.button} onClick={() => this.toggleColor()}>toggle color</button>
      <PropsComponent color={this.state.color} onChangeColor={(color) => this.onChangeColor(color)}></PropsComponent>
    </React.Fragment> 
  }

  isValidElement () {
    console.log('<React.Fragment> isValidElement: ' + React.isValidElement(<React.Fragment></React.Fragment>)) 
    // 编译时，将 html 标签通过 createElement 转为 React Element，所以 div 也是有效的 React Element
    console.log('div isValidElement: ', React.isValidElement(<div></div>))
  }

  toggleColor () {
    this.setState(preState => ({
      color: preState.color === 'red' ? 'blue' : 'red'
    }))
  }

  onChangeColor (color) {
    this.setState(prevState => ({
      color
    }))
  }

  add() {
    const count = this.state.count

    this.setState(previousState => ({
      count: count + 1
    }), function () {
      console.log('1')
    })
    console.log('count: ', this.state.count)

    this.setState(previousState => ({
      count: count + 2
    }), function () {
      console.log('2')
    })
    console.log('count: ', this.state.count)

    this.setState(previousState => ({
      count: count + 3,
      color: 'blue'
    }), function () {
      console.log('3')
    })
    console.log('count: ', this.state.count)

    // this.setState(null) // 传 null 不会 re-render

    // this.setState({
    //   count: this.state.count + 2
    // })
    // console.log(this.state.count)

    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   this.setState({
    //     count: this.state.count + 2
    //   })
    //   console.log(this.state.count)
    // })

    // this.setState((previousState) => {
    //   return {
    //     count: previousState.count + 1
    //   }
    // })
    // this.setState((previousState) => {
    //   return {
    //     count: previousState.count + 2
    //   }
    // })
    // console.log(this.state.count)

    // this.state.count += 1
    // console.log('state1: ', this.state)
    // this.setState({
    //   count: this.state.count + 1
    // })
    // setTimeout(() => {
    //   console.log('state2: ', this.state)
    // }, 1000)
  }
}

export default App;
