import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">daisyUI</button>
      </div>
    </>
  )
}

export default App
