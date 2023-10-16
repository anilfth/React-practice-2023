import React from 'react'
// import ReactDOM  from 'react';
// import Resturant from './component/basics/Resturant'

const App = () => {
  const Name1 = "Anil";
  const lname = "Nishad"
   const currDate = new Date().toLocaleDateString();
   const currTime = new Date().toLocaleTimeString();
  
  return (
  //  <Resturant>

  //  </Resturant>
  <>
  <h1> {`My name is ${Name1} ${lname}`}</h1>
  <p> Addition is two number{2+3}</p>
  <p> {`Current dateis = ${currDate}`}</p>
  <p> current time is = {currTime}</p>
  <p> my lucky number is {Math.random()}</p>
  <h1> Best netflix series is here</h1>
  <p> List of the five best series</p>
  <ol>
    <li> Wheel of the time </li>
    <li>Monkey King</li>
    <li>
      Lord of the rings 
    </li>
    <li> MoneyHeist</li>
    <li> End game</li>
  </ol>
  </>
  )
}

export default App

