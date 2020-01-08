import React, { Suspense } from 'react'
import { Button } from 'antd';
import './App.css'
import {ColorContext} from './context'
import ChildComponent from './Child'
import EmtryComponent from './Empty'
import ContextComponent from './Context'
const TestComponent = React.lazy(() => import('./Test'))

console.log('React: ', React)
console.log('React.createContext: ', React.createContext)
console.log('typeof ColorContext', ColorContext.Provider)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
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
    console.log('App render')
    return (
      <div>
        <div>{this.state.count}</div>
        <Button type="primary" onClick={() => this.add()}>Add</Button>
        <Suspense fallback={<div>Loading...</div>}>
          <TestComponent></TestComponent>
        </Suspense>
        <ChildComponent count={this.state.count}></ChildComponent>
        <EmtryComponent></EmtryComponent>
        <ColorContext.Provider value={this.state.color}>
          <ContextComponent></ContextComponent>
          <Button size="small" onClick={() => this.toggleColor()}>toggleColor</Button>
        </ColorContext.Provider>
      </div>
    )
  }

  toggleColor () {
    this.setState(preState => ({
      color: preState.color === 'red' ? 'blue' : 'red'
    }))
  }

  add() {
    // 默认情况，每次 setState 都会导致组件 re-render
    // 其子组件的 props 没有改变，也会 re-render
    this.setState({
      count: this.state.count + 1
    })

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
