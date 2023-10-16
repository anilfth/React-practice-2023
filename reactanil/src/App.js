/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './index.css'
 import Heading from './Heading.jsx';
import Para from './Para';
import List from './List';

// import ReactDOM  from 'react';
// import Resturant from './component/basics/Resturant'

const App = () => {
  // const Name1 = "Anil";
  // const lname = "Nishad"
  //  const currDate = new Date().toLocaleDateString();
  //  const currTime = new Date().toLocaleTimeString();
  //    const img = "https://picsum.photos/200/300";
  
  //    const img2 = "https://picsum.photos/201/300";
  return (
    
  //  <Resturant>

  //  </Resturant>
  <>
  <Heading />
  <Para />
  <List />
  </>
  )
  /* <h1> {`My name is ${Name1} ${lname}`}</h1>
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

  <h1 className='heading'> My name is {Name1}</h1>
  <div className='img_div'> 
   <img   src={img} alt="Random Image" /> 
   <a href='https://chat.openai.com/c/8594fb36-5447-4925-bda4-b760e89c7c09' target='_blank'>
   <img src={img2} alt='randomIamges'/>
   </a>
   </div> */
}

export default App;

