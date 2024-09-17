import { useState, useCallback } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(9)
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("") //dependeies

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "fnfnfnfnjfvmlkletektk"
    if (number) str = "0123456789"
    if (character) str = "/**--**09753346 "
    for (let i = 0; i <= array.length; i++) {
      const char = Math.floor(math.random() * str.length + 1);
      pass = str.charAt(char)
      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [lenght, number, character,])



  return (
    <>
      {/* <h1 className='text-5xl text-center text-white font-bold'>Password Generator</h1>
      */}
      <div className='w- h-1/9 h-100 max-w-md mx-auto shadow-md rounded-lg top-5
       text-orange-400 text-5xl bg-slate-600'>password Generator
      <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password}
        className='outline-none w-30 h-10 py-1 px-5 text-2xl justify-between rounded-lg'
        placeholder='password' readOnly/>
        <button className=' text-xl px py-3 bg-blue-500 rounded-lg shrink-0'>copy</button>
      </div>
       <div className='flextext-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          </div>
          <input type="range"
          min={6}max={100} 
       value={lenght} 
       className='cursor-pointer'/>
       </div><label className='text-2xl' >lenght</label>
       </div>
    </>
  )
}

export default App
