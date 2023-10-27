import React, { useState } from 'react'

function Complexmultipleinputform() {
    const[Fullname, setFullname] =  useState({
        Fname:'',
        Lname:'',
    });
    const eventInput = (event) => {
  console.log(event.target.value);
  console.log(event.target.name);
  const value = event.target.value;
  const name = event.target.name;
  setFullname((preValue) =>{
    if(name === 'Fname'){
  return {
    Fname: value,
    Lname:preValue.Lname,
  };
    }
    else if(name === 'Lname'){
        return{
         Fname: preValue.Fname,
         Lname:value,
        }
    }
  })
   
  alert('Form submitted');
    }
    const onSubmits = (event) =>{
        event.preventDefault();
    }
    
  return (
    <>
    <div>
      <form onSubmit={onSubmits}>
   <h1> Hello,{Fullname.Fname} {Fullname.Lname} </h1>
   <input type='text'  name='Fname' // name attributes
   placeholder='Enter a firstName' 
   onChange={eventInput} value={Fullname.Fname}/>

   <br/>
   <input type='text' name='Lname' // name attributes
    placeholder='Enter  lastName' onChange={eventInput} value={Fullname.Lname}/>

 <br/>
 <button type='Submit'> Submit me 👍</button>

      </form>
    </div>
    </>
  )
}

export default Complexmultipleinputform
