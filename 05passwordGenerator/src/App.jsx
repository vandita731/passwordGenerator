import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()[]{}"

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)

    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passswordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-700 p-3 '>
        <h1 className='text-center my-4 text-2xl' >Password Generator</h1>
        <div className='flex shadow rounded-lg mb-4 bg-amber-50 '>
          <input
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            readOnly
            ref={passswordRef} />
          <button onClick={copyPasswordToClipboard} className='px-7 bg-blue-500 cursor-pointer text-white rounded-lg hover:border-3'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer accent-blue-500'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1 accent-blue-500'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>

          </div>
          <div className='flex items-center gap-x-1 accent-blue-500'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>

          </div>
        </div>

      </div>

    </>
  )
}

export default App
