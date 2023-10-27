import React, { useState } from 'react'

function Formsreact() {
    const[name, setname] = useState("");
    const [Fullname, setfullname] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnamenew, setLastnamenew] = useState("");
    const onSubmits = (event) => {
        event.preventDefault();
              setfullname(name);
              setLastnamenew(lastname)
          }
    const eventInput = (event) =>{
        console.log(event.target.value);
        setname(event.target.value);
    };
const eventInputTwo = (event) => {
  console.log(event.target.value);
  setLastname(event.target.value);
};
   
  return (
    <>
    <div>
        <form onSubmit={onSubmits}> 
      <h1> Hello, {Fullname} {lastnamenew}</h1>
      <input type='text' placeholder='Enter a Name ' onChange={eventInput} value={name} />
      <br/>
      <input type='text' placeholder='Enter a Lastname' onChange={eventInputTwo} value={lastname} />
      <button type='submit'> submit me 👍</button>
      </form>
      </div>
    </>
  )
}

export default Formsreact
