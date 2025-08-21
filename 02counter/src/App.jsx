import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setcounter] = useState(15)

  // let counter = 15

  const addvalue = () => {

    if(counter < 20){

      setcounter(counter + 1)
    }
  }

  const removevalue = () =>{
    if(counter>0){
      setcounter(counter-1)
    }  
  }
  return (
    <>
      <h1>hellooo</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
