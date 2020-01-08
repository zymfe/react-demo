import React from 'react'

export const ColorContext = React.createContext("orange", (previous, current) => {
  console.log('previous: ', previous)
  console.log('current: ', current)
  return 1
});