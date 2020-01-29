import React, {useState} from 'react'

export const HookComponent = props => {
  const [count, setCount] = useState(0)
  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount(count+1)}>add count</button>
    </React.Fragment>
  )
}