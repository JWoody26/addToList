import { useState, useRef } from 'react'
import './App.css'



function App(){
  let number  = 0;
  const [counter, setCounter] = useState(number);

  const [initalForm, submitForm] = useState(["Email","First Name","Last Name",]);

  const TheEmailValueHere = useRef("")
  const FirstNameValueHere = useRef("")
  const LastNameValueHere = useRef("")

  return (
    <div className="App">


<h1>Form</h1>
      <label htmlFor="email">Your email address</label>
      <br />
      <input type="text" ref = {TheEmailValueHere}  name="email" />
      <br />

      <label htmlFor="first-name">Your firstname : </label>
      <br />
      <input type="text"ref = {FirstNameValueHere}  name="first-name" />
      <br />

      <label htmlFor="last-name">Your last name : </label>
      <br />
      <input type="text" ref = {LastNameValueHere} name="last-name" />

      <br />
      <br />

      <button onClick={() => { submitForm([TheEmailValueHere.current.value, FirstNameValueHere.current.value, LastNameValueHere.current.value]) }}>Submit the form</button>
      <br /> 
      <br />

      <div>
        Your email adress is : {initalForm[0]} <br />
        Your first name : {initalForm[1]} <br />
        Your last name : {initalForm[2]}
      </div>
      
      <br />

  <h1> Counter </h1>
      <button onClick={function(){setCounter(function(prevCounter){
       return prevCounter - 1
      })}}> - </button>
      <h1>{counter}</h1>
      <button onClick={function(){setCounter(function(prevCounter){
       return prevCounter + 1
      })}}> + </button>
    </div>
  )

}

export default App