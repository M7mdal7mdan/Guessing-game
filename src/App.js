import logo from './logo.svg';
import './App.css';
import React,{useState} from'react';


function App() {

const [start, setSatrt] = useState (false);
const [status, setStatus] = useState (false);
const [answer, setAnswer] = useState ("");
const [correctAnswer, setCorrectAnswer] = useState (null);
console.log(correctAnswer);





const save =(e) =>{
e.preventDefault();
const valid = +answer >= 0;
if (!valid){

  return;
}
if(+answer === correctAnswer){
  setStatus("correct answer!!!");
  setSatrt(false);
  
}
else if(+answer < correctAnswer){
setStatus ("Too low");

}
else{
  setStatus("Too high")
}

};
const begin =() =>{
  setCorrectAnswer(Math.ceil(Math.random() *100));
  setSatrt(true);
};





// const startAgain = () =>{
//   setCorrectAnswer("");
//   setCorrectAnswer(Math.ceil(Math.random() *100));
//   setSatrt(true);
  
//   }





  return (
    <>
    { start? 
    <div className="App">
      <h1 className='h1'>Guessing Game </h1>
     <form onSubmit={save}>
        <div>
          <label className='h1'>Answer</label>
          <input value={answer} placeholder='enter a number from 1-100' onChange={(e) => setAnswer(e.target.value)}/>
        </div>
        <button type='number' >Check</button>
        <button onClick={() =>setAnswer(() => "")}>Start Again</button>
        <button>Need Help!!!</button>
       </form>
       <p>{status}</p>
    </div>
  
:

  <div className='App-header'>
    <h1 className='h1'>Guessing Number Game  </h1>
    <button type='button' onClick={begin}>Generate the Game </button>
    <p>{[status]}</p>
  </div>
     }
     </>)

}

export default App;
