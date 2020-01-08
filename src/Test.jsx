import React, { useState } from 'react'
import { Switch } from 'antd'

const TestComponent = (props) => {
  const [isOpen, setStatus] = useState(true)

  console.log('Test component reder')

  return (
    <React.Fragment>
      <div>状态：{isOpen ? '开启' : '关闭'}</div>
      <Switch checked={isOpen} onChange={() => {
        // do something ...
        setStatus(!isOpen)
      }} />
    </React.Fragment>
  )
}

export default TestComponent