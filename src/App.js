import React, {useState} from 'react';
import './style.css';

const App=()=>{
  const [temp, setTemp]=useState(0);
  const [color, setColor]=useState('cold');

  const add=()=>{
    setTemp(temp+1);
    if(temp>=35){
      setColor('hot'); 
    }else if(temp>=15 && temp<=36){
      setColor('neutral');
    }
  }
  const sub=()=>{
    setTemp(temp-1);
    if(temp<=16){
      setColor('cold');
  }else if(temp>=15 && temp<=36){
    setColor('neutral');
  }
}
  return (
    <>
    <h1>Temperature Control</h1>
      <div className='container'>
        <div className='box'>
      <div className={`display ${color}`}>{temp}°c</div>
      </div>
      <div className='btn'>
      <button className='add' onClick={add} disabled={(temp===100)}>+</button>
      <button className='sub' onClick={sub} disabled={(temp===0)}>-</button>
      </div>
      </div>
      </>
      
  )
}
export default App