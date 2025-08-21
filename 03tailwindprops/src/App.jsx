import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    user :"sam",
    age : 19

  }

  return (
    <>
      <h1 className='text-amber-500 bg-blue-500 p-4 rounded-3xl mb-3' >tailwind text</h1>
      <Card name = "vandita" btnText="about vandita" />
      <Card name = "sam" btnText="about sam" />
      <Card/>
    
    </>
  )
}  
export default App
