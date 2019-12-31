import React, { Suspense } from 'react'
import { Button } from 'antd';
import './App.css'
const TestComponent = React.lazy(() => import('./Test'))

interface Props {
  [key: string]: any // temp record
}

interface State {
  count: number
}

class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return (
      <div>
        <div>{this.state.count}</div>
        <Button type="primary" onClick={() => this.add()}>Add</Button>
        <Suspense fallback={<div>Loading...</div>}>
          <TestComponent></TestComponent>
        </Suspense>
      </div>
    )
  }

  add() {
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
