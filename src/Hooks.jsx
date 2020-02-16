import React, {useState, useEffect} from 'react'

function useCountStatus (count) {
  return count % 2 === 0
}

export function HookComponent (props) {
  console.log('props: ', props)
  const [count, setCount] = useState(0)
  const countStatus = useCountStatus(count) ? '偶数' : '奇数'
  console.log('count status: ', countStatus)

  const [name, setName] = useState(() => {
    console.log('useState name')
    return 'Hello React'
  })

  useEffect(() => {
    console.log('scroll event')

    const scrollEvent = e => {
      console.log('scroll: ', e)
    }
    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])
  console.log('0000000')

  useEffect(() => {
    console.log('document title')
    document.title = Math.random()
  })

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount(count+1)}>add count</button>
      {props.children}
    </React.Fragment>
  )
}