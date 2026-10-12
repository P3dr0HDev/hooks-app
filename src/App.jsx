import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExemploUseEffect/>
    <Timer/>  
    </>
  )
}

export default App
