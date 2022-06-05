import React,{useState} from 'react';
import './App.css';

function App() {

const[add,setAdd]=useState('0');
const[add1,setAdd1]=useState(10)
  const inp=(c)=>{ setAdd(Number(c.target.value));
                 }
  const ADD=()=>{setAdd1(add+add1);
                }
  const SUB=()=>{setAdd1(add1-add)}
    return(
    <main className="mt-5">
      
      <label>Enter the value to add/substract </label><br/>
      <input
        type='number' className="number"
        placeholder='enter the number'
        onChange={inp}
        
        /><br/>

      <button className="add" onClick={ADD}>Addition</button><br/>
    <button className="sub" onClick={SUB}>Substraction</button><br/>
    <span>Result:<b> {add1}</b></span>
     
    
    </main>
  
      );
}

export default App;
