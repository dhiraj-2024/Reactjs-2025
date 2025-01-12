import { useState } from 'react'

import './App.css'

function App() {

const [counter,setCounter] = useState(0); 

const addvalu = ()=>{
  if(counter == 5) addvalu(false)
  setCounter(counter+1)

}
const subvalu = ()=>{
  if(counter == 0) subvalu(false)
  setCounter(counter-1)
}
  return (
    <>
     <h2>counter : {counter}</h2>
     <button onClick={addvalu}>click ++</button>
     <button onClick={subvalu}>click --</button>

    </>
  )
}

export default App
