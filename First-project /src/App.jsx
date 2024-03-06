import './App.css'
import {useState} from 'react'

function App() {
/* If we add more same methods, like three more. 
Will in add those values to my counter?
The answer - NO! 
React does not send things right away, when u perform some action.
Its batching them. Now we can replace this method with a callback. 
So, we automatically get access to the previous counter. 
Those can not be batched, because dependent on a previous value. 
Now the number jumps in update steps of four */ 
   const [counter, setCounter] = useState(1)
 
   const addValue = () => {
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   }

   const removeValue = () => {
   setCounter(counter -1)
   }
   return (
    <>
      <div>
        <h1>React Learning Progress {counter}</h1>  
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Remove value</button>

     </div>
     </>
  )
}

export default App
