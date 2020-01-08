import React from 'react'

class ChildComponent extends React.Component {
  constructor (props: Props) {
    super(props)
    this.state = {

    }
  }

  // 只要父组件重新渲染了，即使传入子组件的 props 未发生变化，那么子组件也会重新渲染，进而触发 render。
  // 子组件会执行 shouldComponentUpdate
  shouldComponentUpdate(nextProps) {
    console.log('this.props: ', this.props)
    console.log('nextProps: ', nextProps)
    return true
  }

  render() {
    return (<div>Child Component</div>)
  }
}

export default ChildComponent