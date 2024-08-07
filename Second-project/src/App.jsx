import { useState } from 'react'

function App() {
const [color, setColor] = useState('')

  return (
    <>
  <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
  <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={() => setColor ("green")}
      className="outline-none px-4 py-1 rounded-ful shadow-lg text-black rounded-full"
      style={{backgroundColor: 'green'}}
      >Go</button>

<button onClick={() => setColor ("orange")}
      className="outline-none px-4 py-1 rounded-ful shadow-lg text-black rounded-full"
      style={{backgroundColor: 'orange'}}
      >Prepare to stop</button>

<button onClick={() => setColor ("red")}
      className="outline-none px-4 py-1 rounded-ful shadow-lg text-black rounded-full"
      style={{backgroundColor: 'red'}}
      >Stop</button>

    </div>
    </div>
  </div>
 
    </>
  )
}

export default App
