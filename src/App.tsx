import React, { useState } from 'react'
import { Button, Switch } from 'antd';
import './App.css'

interface Props {
  [key: string]: any // temp record
}

interface State {
  count: number
}

const TestComponent = (props: Props) => {
  const [isOpen, setStatus] = useState(true)

  return (
    <div>
      <div>状态：{isOpen ? '开启' : '关闭'}</div>
      <Switch checked={isOpen} onChange={() => setStatus(!isOpen)} />
    </div>
  )
}

class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  render () {
    console.log('render')
    return (
      <div>
        <div>{this.state.count}</div>
        <Button type="primary" onClick={() => this.add()}>Add</Button>
        <TestComponent></TestComponent>
      </div>
    )
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
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
