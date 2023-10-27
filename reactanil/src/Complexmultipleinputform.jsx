import React, { useState } from 'react'

function Complexmultipleinputform() {
    const[Fullname, setFullname] =  useState({
        Fname:'',
        Lname:'',
        email: '',
        phone: ' ',
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
    email:preValue.email,
    phone:preValue.phone,
  };
    }
    else if(name === 'Lname'){
        return{
         Fname: preValue.Fname,
         Lname:value,
         email:preValue.email,
         phone:preValue.phone,
        };
    }
    else if(name === 'email'){
        return{
         Fname: preValue.Fname,
         Lname:preValue.Lname,
         email:value,
         phone:preValue.phone,
        }
    }
    else if(name === 'phone'){
        return{
         Fname: preValue.Fname,
         Lname:preValue.Lname,
         email:preValue.email,
         phone:value,
        }
    }
  })
   
  
    }
    const onSubmits = (event) =>{
        event.preventDefault();
        // alert('Form submitted');
    }
    
  return (
    <>
    <div>
      <form onSubmit={onSubmits}>
   <h1> Hello,{Fullname.Fname} {Fullname.Lname} </h1>
   <p> {Fullname.email} {Fullname.phone}</p>
   <input type='text'  name='Fname' // name attributes
   placeholder='Enter a firstName' 
   onChange={eventInput} value={Fullname.Fname}/>

   <br/>
   <input type='text' name='Lname' // name attributes
    placeholder='Enter  lastName' onChange={eventInput} value={Fullname.Lname}/>

 <br/>
 <input type='email' name='email' // name attributes
    placeholder='Enter your email' onChange={eventInput} value={Fullname.email}/>
 <br/>
<input type='number' name='phone' // name attributes
    placeholder='Enter your phone number' onChange={eventInput} value={Fullname.phone}/>
    <br/>
 <button type='Submit'> Submit me 👍</button>

      </form>
    </div>
    </>
  )
}

export default Complexmultipleinputform
