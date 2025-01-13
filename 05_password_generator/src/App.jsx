import { useCallback, useEffect, useRef, useState } from 'react'
import React from 'react'


function App() {

  const [password,setPassword] =useState("");
  const [length,setLength] = useState(8);
  const [numallow,setNumallow] = useState(false);
  const [charallow,setCharallow] = useState(false);

   // useRef react hook for refrence 
  const   passwordref = useRef(null)

  const copyToClipBord =()=>{
    passwordref.current?.select()  ; // this method gives effect to user when user click on copy button he see the text is copied;
    passwordref.current?.setSelectionRange(0,100); // it is a method to select selective range ;
    window.navigator.clipboard.writeText(password); // in next js there is no window object there is server 

  }

  const  passGenerator = useCallback(()=>{
    let pass=''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numallow) str += "0123456789";
    if(charallow) str += "~!@#$%^&*(){}[]"

    for (let i = 1; i <= length; i++) {
      let char =  Math.floor(Math.random() * str.length + 1); 
      
      pass += str.charAt(char)
      
    }
    setPassword(pass);

  },[length,numallow,charallow,setPassword])

useEffect(() =>{
passGenerator()
},[length,numallow,charallow,passGenerator])


  return (
    <div className='flex justify-center mt-[150px] '>
      <div className='w-[70%] h-[400px] bg-gray-500 rounded-2xl flex flex-col justify-center items-center'>
      <div className='text-4xl text-center mt-10 font-bold text-lime-500'>Password Generator</div>
      <div className='flex flex-row justify-center items-center mt-11'>
        <input 
        type="text"
        value={password}
        placeholder='password'
        className='w-[300px] h-[50px] p-2 rounded outline-none text-[black]'
        readOnly // because no one can write in input field :
        ref={passwordref}
        />
        <button className='bg-lime-600 h-[50px] w-[100px] rounded rounded-l-none  ' onClick={(copyToClipBord)}>Copy</button>
      </div>

      <div className=' flex flex-row gap-2 mt-[50px] '>
        <input 
        type="range"
        value={length}
        min={8}
        max={30}
        className='cursor-pointer'
        onChange={(event)=>{
          setLength(Number(event.target.value));
        }}
        />

        <label htmlFor="">Length:{length}</label>
        <input 
        type="checkbox"
        defaultChecked={numallow}
        onClick={()=>{
          setNumallow((prev)=> !prev)
        } }
        
         />
         <label htmlFor="number input">Number</label>
         <input 
        type="checkbox"
        defaultChecked={charallow}
        onClick={()=>{
          setCharallow((charallow) => !charallow)
        }}
         />
         <label htmlFor="number input">Charecters</label>
      </div>

      </div>
    </div>
  )
}

export default App
