import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(10)
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    if (timer > 0 && timer) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown)
    }
    else {
      setDisable(true)
    }
  }, [timer])

  const hanadleClick = () => {
    if (!disable)
      setCount((count) => count + 1);
  }

  return (
    <>
      <div>
        <h3>{timer<=0?`Time's up`:`Time remaining: ${timer}`}</h3>
        <h4>{count}</h4>
        <button onClick={hanadleClick}>Click me</button>
      </div>
    </>
  )
}

export default App
