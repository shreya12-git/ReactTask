import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
const[text,setText]=useState('');
const[count,setCount]=useState(0);
const changeHandler=(event)=>{
  setText(event.target.value);
};
useEffect(()=>{
  const words=text.split(' ');
  let count=0;
  words.forEach((word)=>{
    if(word.trim()!==''){
      count++;
    }
  });
  setCount(count);
},[text]);
  return (
    <div className="container">
      <div className='card'>
          <h1>Responsive Paragraph Word Counter</h1>
          <textarea className='writing-text' value={text} onChange={changeHandler} ></textarea>
          <p>word count:{count}</p>
      </div>
     
    </div>
  );
}

export default App;
