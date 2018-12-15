import React from 'react'
import ReactDOM from 'react-dom'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const unicafeReducer = (state = initialState, action) => {
  console.log(action)
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'GOOD':
      return state.good + 1
    case 'OK':
      return state.ok + 1
    case 'BAD':
      return state.bad + 1
    case 'ZERO':
      return initialState
  }
  return state
}

export default unicafeReducer