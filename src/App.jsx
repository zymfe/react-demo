import React, { Suspense } from 'react'
import { Button } from 'antd';
import './App.css'
import {ColorContext} from './context.js'
import ChildComponent from './Child'
import EmtryComponent from './Empty'
import ContextComponent from './Context'
import MemoComponent from './Memo'
import ChildrenComponent from './Children'
const TestComponent = React.lazy(() => import('./Test'))

console.log('React: ', React)
console.log('React.createContext: ', React.createContext)
console.log('Context.Provider', ColorContext.Provider)
console.log('Context.Consumer', ColorContext.Consumer)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      color: 'red'
    }
    this.ChildrenComponentRef = React.createRef()
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log('this.ChildrenComponentRef.current: ', this.ChildrenComponentRef.current)
    this.ChildrenComponentRef.current.printfAllChildren()
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('App render', this)
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
        <MemoComponent count={this.state.count} color={this.state.color}></MemoComponent>
        <ChildrenComponent ref={this.ChildrenComponentRef}>
          <div index="0">a</div>
          <div index="1">
            <div>b-1</div>
            <div>b-2</div>
          </div>
          <div index="2">c</div>
        </ChildrenComponent>
        <Button type="primary" onClick={() => this.isValidElement()}>isValidElement</Button>
      </div>
    )
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
