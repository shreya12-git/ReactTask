import './App.css';
import { useEffect, useState } from 'react';
function App() {
 const[age,setAge]=useState(1);
 const handleChange=(event)=> {
    let given=new Date(event.target.value);
    let ret=given.getFullYear();   
    return ret;
  };
 const getAge=(event)=>{
  let getyear=document.querySelector('.dob');
  const birthYear=handleChange({target:{value:getyear.value}})
  let today=new Date();
  let year=today.getFullYear();
  setAge(year-birthYear);
 }


// useEffect(()=>{
//   calculateAge();
// },[age])
  return (
    <div className="App">
      <div classname="mainapp">
        <div>
          <h1>Age Calculator</h1>
        </div>
        <div>
          <h3>Enter your date of birth</h3>
        </div>
        <div>
          <input type='date' className='dob' onChange={handleChange}></input>
        </div>
        <div>
          <button className='btn'  id='dob' onClick={getAge}>Calculate Age</button>
        </div>
        <div>
          <p><b>You are {age} years old</b></p>
        </div>
      </div>
    </div>
  );
}

export default App;
