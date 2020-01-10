// https://zh-hans.reactjs.org/docs/react-api.html#reactmemo

import React from 'react'

function MemoComponent (props) {
  console.log('MemoComponent re-render')
  return (
    <React.Fragment>
      <div>color: {props.color}</div>
      <div>count: {props.count}</div>
    </React.Fragment>
  )
}

function areEqual(prevProps, nextProps) {
 console.log(prevProps.color === nextProps.color)
 return prevProps.color === nextProps.color
}

export default React.memo(MemoComponent, areEqual)