import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'

import reactLogo from './assets/react.svg'
import reduxLogo from './assets/redux.png'


import { decrement, increment, reset } from './redux/slices/counter/counterSlice'
import './App.css'

function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()



  return (
    <div className="App">

      <div>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={reduxLogo} className="logo redux" alt="Redux logo" />

      </div>

      <h2>Vite + React + Typescript + Redux Toolkit</h2>

      <div>
   
          <button onClick={ () => dispatch( increment() ) }>
            +
          </button>
    
          <button onClick={ () => dispatch( decrement() ) }>
            -
          </button>

          <button onClick={ () => dispatch( reset() ) }>
            R
          </button>

      </div>

      <div>
        <h1>{ count }</h1>
      </div>


    </div>
  )
}

export default App
