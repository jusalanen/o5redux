import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
//import unicafeReducer from './unicafeReducer'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const unicafeReducer = (state = initialState, action) => {
  console.log(action)
  console.log(state)
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'GOOD':
      state.good += 1
      return state
    case 'OK':
      state.ok += 1
      return state
    case 'BAD':
      state.bad += 1
      return state 
    case 'ZERO':
      return initialState
  }
  return state
}

const store = createStore(unicafeReducer)


const Statistiikka = () => {
  const {good, ok, bad} = store.getState()
  const total = good + ok + bad
  const prosHyv = good / total * 100

  if (total === 0) {
    return (
      <div>
        <h2>Statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  } else {      
    return (
      <div>
        <h2>Statistiikka</h2>
          <p>hyvä: {good}</p>
          <p>neutraali: {ok}</p>
          <p>huono: {bad}</p>
          <p>hyviä: {prosHyv.toFixed(1)} %</p>
      
          <button onClick={e => store.dispatch({ 
            type: 'ZERO' })}>nollaa tilasto</button>
      </div >
    )
  }
}

class App extends React.Component {  
  
  klik = (nappi) => () => {
    store.dispatch({ type: nappi })
  }

  render() {
    return (
      <div>
        <h2>Anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

export default App