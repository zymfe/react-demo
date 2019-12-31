import React, { useState } from 'react'
import { Switch } from 'antd'

interface Props {
  
}

const TestComponent = (props: Props) => {
  const [isOpen, setStatus] = useState(true)

  return (
    <div>
      <div>状态：{isOpen ? '开启' : '关闭'}</div>
      <Switch checked={isOpen} onChange={() => {
        // do something ...
        setStatus(!isOpen)
      }} />
    </div>
  )
}

export default TestComponent