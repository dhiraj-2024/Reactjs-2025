import { useState } from 'react'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const students =[{
    name: "dhiraj",
    age: 22,
    address: "pune"
  },
]
  return (
 <>
  <div className='text-[45px]'>
    hello
  </div>

  <div className='flex justify-center items-center gap-4'>


  <Card subName="math" teacher="patil.s" ste={students}/>
  <Card subName='science' teacher="kale.p"/>
  <Card subName='english' teacher="khairnar."/>
  <Card subName='physics'teacher="sarde" />

  </div>

 </>
  )
}

export default App
