import deepFreeze from 'deep-freeze'
import unicafeReducer from './unicafeReducer'

describe.only('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  it('should return a proper initial state when called with undefined state', () => {

    const action = {
      type: 'DO_NOTHING'
    }

    const newState = unicafeReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = unicafeReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  it('zero sets the initial state', () => {
    const action = {
      type: 'ZERO'
    }
    const state = { good: 1, ok: 1, bad: 1}

    deepFreeze(state)
    const testState = unicafeReducer(state, action)
    expect(testState).toEqual(initialState)
  })
})