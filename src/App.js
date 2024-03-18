import React,{ useState } from 'react';
import './App.css';
var adjustInterval = undefined;

function App() {
  const [watch,setWatch] = useState(0)
  const [started,setstarted] = useState(false)
 
 
  const startWatch = ()=>{
   adjustInterval = setInterval(()=> {
   setWatch((x)=>x+1)
   },1000)
   setstarted(true)
  }

   const stopWatch = ()=> {
  clearInterval(adjustInterval) 
  setstarted(false)
  }
 
   const resetWatch = ()=> {
   setWatch(0)
   clearInterval(adjustInterval)
   setstarted(false)
   }

  return (
    <div className="App">
    <h1>Stop Watch</h1>
    <h1>{watch}</h1>
    <button className='start' disabled={started} onClick={startWatch}>Start</button>
    <button className='stop' onClick={stopWatch}>Stop</button>
    <button className='reset' onClick={resetWatch}>Reset</button>

        </div>
  );
}


export default App;
