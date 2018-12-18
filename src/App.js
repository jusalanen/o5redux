import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import unicafeReducer from './unicafeReducer'

const store = createStore(unicafeReducer)

const Statistiikka = () => {
  const {good, ok, bad} = store.getState()
  const total = good + ok + bad
  const prosHyv = good / total * 100
  const ka = (good - bad) / total

  if (total === 0) {
    return (
      <div>
        <h3>Statistiikka</h3>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  } else {      
    return (
      <div>
        <h3>Statistiikka</h3>
        <table><tbody>
        <tr><td width="75">hyvä: </td><td width="40">{good}</td></tr>
        <tr><td width="75">neutraali: </td><td width="40">{ok}</td></tr>
        <tr><td width="75">huono: </td><td width="40">{bad}</td></tr>
        <tr><td width="75">hyviä: </td><td width="60">{prosHyv.toFixed(1)} %</td></tr>
        <tr><td width="75">keskiarvo: </td><td width="60">{ka.toFixed(2)}</td></tr>
        </tbody></table>
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
        <button onClick={this.klik('ZERO')}>nollaa tilasto</button>
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