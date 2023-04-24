import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './router/Router'
import ContextApiProvider from './utils/ContextApi'
import Header from './layout/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
        <ContextApiProvider>
          <Router />
        </ContextApiProvider>
        
    </div>
  )
}

export default App
