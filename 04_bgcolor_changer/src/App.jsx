import { useState } from "react"


function App() {
const [color,setColor] = useState("black")

  return (
   <div className="w-full h-screen relative flex justify-center  " style={{backgroundColor:color}}>
    <h1 className="text-[70px] font-bold  absolute top-[100px] ">clicks on buttons to  change bg-colors</h1>

<div className="h-20 w-[90%] bg-gray-500 rounded-2xl bottom-10 absolute flex flex-row justify-center items-center gap-4 ">
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}} >pink</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}} >red</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}} >blue</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"gray"}} onClick={()=>{setColor("gray")}} >gray</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"orange"}} onClick={()=>{setColor("orange")}} >orange</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}} >yellow</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}} >green</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"skyblue"}} onClick={()=>{setColor("skyblue")}} >skyblue</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"lime"}} onClick={()=>{setColor("lime")}} >lime</button>
<button className="border border-blue-700 w-[80px] rounded-full h-10" style={{backgroundColor:"purple"}} onClick={()=>{setColor("purple")}} >purple</button>

</div>

   </div>
  )
}

export default App
